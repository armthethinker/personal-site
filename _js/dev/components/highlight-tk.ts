// Wraps every standalone "TK" placeholder in a blinking span so unfinished
// copy is easy to spot while drafting. Dev-only — never bundled into production.
export function highlightTK() {
   const regex = /\bTK\b/g
   document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      '<span class="blink">TK</span>',
   )
}
