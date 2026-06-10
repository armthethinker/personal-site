"use strict";
(() => {
  // _js/dev/components/highlight-tk.ts
  function highlightTK() {
    const regex = /\bTK\b/g;
    document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      '<span class="blink">TK</span>'
    );
  }

  // _js/dev/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    highlightTK();
  });
})();
//# sourceMappingURL=dev.js.map
