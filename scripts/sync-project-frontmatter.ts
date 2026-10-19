import { promises as fs } from 'fs'
import path from 'path'
import yaml from 'yaml'

const PROJECTS_YML = '_data/projects.yml'
const PROJECTS_DIR = 'projects'

interface ProjectEntry {
  pID: number
  description?: string
  imgHero?: string
  [key: string]: unknown
}

async function syncProjectFrontmatter() {
  const ymlRaw = await fs.readFile(PROJECTS_YML, 'utf-8')
  const projects: ProjectEntry[] = yaml.parse(ymlRaw)

  const byId = new Map(projects.map(p => [p.pID, p]))

  const files = await fs.readdir(PROJECTS_DIR)
  const mdFiles = files.filter(f => f.endsWith('.md'))

  for (const file of mdFiles) {
    const filePath = path.join(PROJECTS_DIR, file)
    const raw = await fs.readFile(filePath, 'utf-8')

    // Split on the front matter delimiters
    const match = raw.match(/^---\n([\s\S]*?)\n---(\n[\s\S]*)$/m)
    if (!match) {
      console.warn(`Skipping ${file}: no front matter found`)
      continue
    }

    const [, fmRaw, body] = match
    const fm = yaml.parse(fmRaw) as Record<string, unknown>

    if (typeof fm.pID !== 'number') {
      console.warn(`Skipping ${file}: no pID in front matter`)
      continue
    }

    const project = byId.get(fm.pID)
    if (!project) {
      console.warn(`Skipping ${file}: no projects.yml entry for pID ${fm.pID}`)
      continue
    }

    let changed = false

    if (project.description && fm.description !== project.description) {
      fm.description = project.description
      changed = true
    }

    if (project.imgHero && fm.image !== project.imgHero) {
      fm.image = project.imgHero
      changed = true
    }

    if (!changed) {
      console.log(`Up to date: ${file}`)
      continue
    }

    const newFm = yaml.stringify(fm).trimEnd()
    const newContent = `---\n${newFm}\n---${body}`
    await fs.writeFile(filePath, newContent, 'utf-8')
    console.log(`Updated:    ${file}`)
  }
}

syncProjectFrontmatter().catch(console.error)
