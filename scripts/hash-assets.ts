import { promises as fs } from 'fs'
import crypto from 'crypto'
import path from 'path'

// Files we want to hash
const filesToHash = [
  'assets/css/main.css',
  'assets/css/main.css.map',
  'assets/js/main.min.js'
]

// Jekyll's data directory
const MANIFEST_DIR = '_data'
const MANIFEST_PATH = path.join(MANIFEST_DIR, 'manifest.json')

async function hashAssets() {
  console.log('Generating build hash...')
  const manifest: Record<string, string> = {}

  // Generate a single 8-character random hash for the entire build
  const buildHash = crypto.randomBytes(4).toString('hex')
  console.log(`Build Hash: ${buildHash}\n`)

  // Ensure _data directory exists
  await fs.mkdir(MANIFEST_DIR, { recursive: true })

  for (const file of filesToHash) {
    try {
      const parsedPath = path.parse(file)
      const hashedFileName = `${parsedPath.name}.${buildHash}${parsedPath.ext}`
      const hashedFilePath = path.join(parsedPath.dir, hashedFileName)
      
      // Rename the file
      await fs.rename(file, hashedFilePath)
      
      // Save the mapping to our manifest object
      manifest[parsedPath.base] = `/${hashedFilePath}`
      
      console.log(`Renamed: ${parsedPath.base} -> ${hashedFileName}`)
    } catch (error: any) {
      if (error.code === 'ENOENT') {
         console.warn(`Warning: Could not find ${file} to hash.`)
      } else {
         console.error(`Error processing ${file}:`, error)
      }
    }
  }

  // Write the manifest.json for Jekyll to read
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
  console.log(`\nManifest written to ${MANIFEST_PATH}`)
}

hashAssets().catch(console.error)