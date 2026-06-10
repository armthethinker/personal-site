"use strict";
(() => {
  // _js/app/components/masonry.ts
  function initMasonry() {
    const grid = document.querySelector(".m-grid");
    if (!grid) return;
    new Masonry(grid, {
      itemSelector: ".m-grid-item",
      columnWidth: ".m-grid-sizer",
      percentPosition: true,
      horizontalOrder: true
    });
  }

  // _js/app/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    initMasonry();
  });
})();
//# sourceMappingURL=app.js.map
