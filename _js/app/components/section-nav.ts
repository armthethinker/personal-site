/**
 * In-page section navigation — DEBUG BUILD.
 * Renders the breadcrumb capsule (always visible, fixed by CSS) and updates the
 * active section/subsection path as the reader scrolls. Also dumps the computed
 * hierarchy into a debug panel so we can verify what collectSections() reads.
 * Reveal/enter animations are intentionally still stripped — added back later.
 */

// region Types & constants

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

/** How far below the capsule's bottom edge a heading must pass before it counts as "active". */
const ACTIVE_THRESHOLD = 24

// endregion

// region Helpers

function slugify(text: string): string {
   return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
}

function isVisible(el: HTMLElement | null): boolean {
   return !!(el && el.offsetParent !== null)
}

/** Throttles a callback to at most once per animation frame. */
function rafThrottle(fn: () => void): () => void {
   let ticking = false
   return () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
         fn()
         ticking = false
      })
   }
}

// endregion

// region Section model

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

interface Active {
   index: number
   path: Crumb[]
}

/** Resolves the reader's scroll position to the active section index and its breadcrumb path (section, then current subsection if any). */
function computeActive(sections: Section[], threshold: number): Active {
   const isPast = (h: HTMLElement): boolean =>
      isVisible(h) && h.getBoundingClientRect().top <= threshold

   // Default to the first section so the cluster is never empty.
   let index = 0
   sections.forEach((s, i) => {
      if (isPast(s.header)) index = i
   })

   const section = sections[index]
   const path: Crumb[] = [{ id: section.id, text: section.text }]

   let sub: Subsection | null = null
   for (const s of section.subs) if (isPast(s.header)) sub = s
   if (sub) path.push({ id: sub.id, text: sub.text })

   return { index, path }
}

// endregion

// region Rendering

/** Fills a side capsule with the adjacent (previous / next) section, or hides it when there is no such neighbor. */
function renderSide(el: HTMLAnchorElement, section: Section | undefined): void {
   if (!section) {
      el.hidden = true
      return
   }
   el.hidden = false
   el.href = `#${section.id}`
   el.textContent = ''
   const label = el.appendChild(document.createElement('span'))
   label.className = 'snav-side-label'
   label.textContent = section.text
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
      if (i === 0) {
         // The major-section crumb carries both its full text and just its first
         // word; CSS picks which to show (first word only when a subsection crumb
         // is present on small screens). See _sass/components/project-nav.sass.
         a.classList.add('snav-crumb-major')
         const full = a.appendChild(document.createElement('span'))
         full.className = 'snav-crumb-full'
         full.textContent = crumb.text
         const first = a.appendChild(document.createElement('span'))
         first.className = 'snav-crumb-first'
         first.textContent = crumb.text.split(/\s+/)[0] || crumb.text
      } else {
         a.textContent = crumb.text
      }
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

// endregion

// region Entry point

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

   const prev = document.getElementById('snav-prev') as HTMLAnchorElement | null
   const next = document.getElementById('snav-next') as HTMLAnchorElement | null

   // The active line sits just below the fixed capsule; a heading is "active" once it scrolls above it.
   const activeLine = (): number => nav.getBoundingClientRect().bottom + ACTIVE_THRESHOLD
   const live = document.createElement('div')
   live.id = 'snav-live'
   document.getElementById('snav-debug')?.prepend(live)
   const update = (): void => {
      const line = activeLine()
      const { index, path } = computeActive(sections, line)
      if (prev) renderSide(prev, sections[index - 1])
      renderCrumbs(crumbs, path)
      if (next) renderSide(next, sections[index + 1])
      live.textContent =
         `scrollY=${Math.round(window.scrollY)}  line=${Math.round(line)}  ` +
         `active=[${path.map((c) => c.text).join(' › ')}]`
   }

   const onScroll = rafThrottle(update)
   window.addEventListener('scroll', onScroll, { passive: true })
   window.addEventListener('resize', onScroll)

   update()
}

// endregion
