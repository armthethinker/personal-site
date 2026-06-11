interface Crumb {
   id: string
   text: string
}

interface Subsection {
   header: HTMLElement
   id: string
   text: string
}

interface Section extends Subsection {
   subs: Subsection[]
}

function slugify(text: string): string {
   return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
}

/** Reads the page's headings into sections, each with the subsections that follow it, assigning stable ids to any heading that lacks one. */
function collectSections(pageBody: HTMLElement): Section[] {
   const usedIds: Record<string, number> = {}
   const makeId = (text: string): string => {
      const base = slugify(text) || 'section'
      let id = base
      while (usedIds[id] || document.getElementById(id)) {
         usedIds[base] = (usedIds[base] || 0) + 1
         id = `${base}-${usedIds[base]}`
      }
      usedIds[id] = 1
      return id
   }

   const isSectionHeader = (h: HTMLElement): boolean =>
      !h.closest('.project-glance-sec') && (h.textContent ?? '').trim() !== ''

   const sections: Section[] = Array.from(
      pageBody.querySelectorAll<HTMLElement>('h2.section-header'),
   )
      .filter(isSectionHeader)
      .map((h) => {
         if (!h.id) h.id = makeId(h.textContent ?? '')
         return { header: h, id: h.id, text: (h.textContent ?? '').trim(), subs: [] }
      })

   let current: Section | null = null
   pageBody.querySelectorAll<HTMLElement>('h2.section-header, h4').forEach((h) => {
      if (h.tagName === 'H2') {
         current =
            h.classList.contains('section-header') && isSectionHeader(h)
               ? sections.find((s) => s.header === h) ?? null
               : null
         return
      }
      const text = (h.textContent ?? '').trim()
      if (!current || !text) return
      if (!h.id) h.id = makeId(text)
      current.subs.push({ header: h, id: h.id, text })
   })

   return sections
}

function renderCrumbs(container: HTMLElement, path: Crumb[]): void {
   container.innerHTML = ''
   path.forEach((crumb, i) => {
      if (i > 0) {
         const sep = document.createElement('span')
         sep.className = 'snav-crumb-sep'
         sep.setAttribute('aria-hidden', 'true')
         sep.textContent = '›'
         container.appendChild(sep)
      }
      const a = document.createElement('a')
      a.className = 'snav-crumb'
      a.href = `#${crumb.id}`
      a.textContent = crumb.text
      container.appendChild(a)
   })
}

/** Dumps the computed hierarchy (section ids/text + their subsections) into a visible debug panel at the top of the page body. */
function renderDebug(pageBody: HTMLElement, sections: Section[]): void {
   const existing = document.getElementById('snav-debug')
   if (existing) existing.remove()

   const lines: string[] = [`sections found: ${sections.length}`, '']
   sections.forEach((s) => {
      lines.push(`H2  #${s.id}  —  ${s.text}  (subs: ${s.subs.length})`)
      s.subs.forEach((sub) => lines.push(`     H4  #${sub.id}  —  ${sub.text}`))
   })

   const panel = document.createElement('div')
   panel.id = 'snav-debug'
   panel.className = 'snav-debug'
   const pre = document.createElement('pre')
   pre.textContent = lines.join('\n')
   panel.appendChild(pre)
   pageBody.prepend(panel)
}

export function initSectionNav(): void {
   const pageBody = document.querySelector<HTMLElement>('.page-body')
   const nav = document.getElementById('section-nav')
   const crumbs = document.getElementById('snav-crumbs')
   if (!pageBody || !nav || !crumbs) return

   const sections = collectSections(pageBody)
   renderDebug(pageBody, sections)

   if (sections.length === 0) {
      crumbs.textContent = '(no sections found)'
      return
   }

   const first = sections[0]
   const path: Crumb[] = [{ id: first.id, text: first.text }]
   if (first.subs[0]) path.push({ id: first.subs[0].id, text: first.subs[0].text })
   renderCrumbs(crumbs, path)
}
