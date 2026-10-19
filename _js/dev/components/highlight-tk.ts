// Wraps every standalone "TK" placeholder in a blinking span so unfinished
// copy is easy to spot while drafting. Dev-only — never bundled into production.
//
// Walks text nodes and wraps matches in place. We deliberately do NOT reassign
// document.body.innerHTML: that rebuilds the entire DOM, detaching every element
// reference other features captured (e.g. the section nav), silently breaking them.
const TK = /\bTK\b/
const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'NOSCRIPT'])

export function highlightTK() {
   const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
         const parent = node.parentElement
         if (!parent || SKIP.has(parent.tagName) || parent.classList.contains('blink'))
            return NodeFilter.FILTER_REJECT
         return TK.test(node.nodeValue ?? '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
      },
   })

   const targets: Text[] = []
   for (let n = walker.nextNode(); n; n = walker.nextNode()) targets.push(n as Text)
   targets.forEach(wrapMatches)
}

function wrapMatches(node: Text): void {
   const text = node.nodeValue ?? ''
   const regex = /\bTK\b/g
   const frag = document.createDocumentFragment()
   let last = 0
   let m: RegExpExecArray | null
   while ((m = regex.exec(text))) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)))
      const span = document.createElement('span')
      span.className = 'blink'
      span.textContent = m[0]
      frag.appendChild(span)
      last = m.index + m[0].length
   }
   if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)))
   node.replaceWith(frag)
}
