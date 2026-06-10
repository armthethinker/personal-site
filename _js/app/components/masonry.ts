// Masonry is a global from vendor.min.js (its own <script> tag), not an import —
// declaring it here keeps it out of the app bundle so it stays in the cached
// vendor chunk. `declare` is type-only; it emits no code.
declare const Masonry: new (
   element: Element | string,
   options?: Record<string, unknown>,
) => unknown

export function initMasonry() {
   const grid = document.querySelector('.m-grid')
   if (!grid) return
   new Masonry(grid, {
      itemSelector: '.m-grid-item',
      columnWidth: '.m-grid-sizer',
      percentPosition: true,
      horizontalOrder: true,
   })
}
