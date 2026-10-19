"use strict";
(() => {
  // _js/dev/components/highlight-tk.ts
  var TK = /\bTK\b/;
  var SKIP = /* @__PURE__ */ new Set(["SCRIPT", "STYLE", "TEXTAREA", "NOSCRIPT"]);
  function highlightTK() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || SKIP.has(parent.tagName) || parent.classList.contains("blink"))
          return NodeFilter.FILTER_REJECT;
        return TK.test(node.nodeValue ?? "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const targets = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) targets.push(n);
    targets.forEach(wrapMatches);
  }
  function wrapMatches(node) {
    const text = node.nodeValue ?? "";
    const regex = /\bTK\b/g;
    const frag = document.createDocumentFragment();
    let last = 0;
    let m;
    while (m = regex.exec(text)) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const span = document.createElement("span");
      span.className = "blink";
      span.textContent = m[0];
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.replaceWith(frag);
  }

  // _js/dev/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    highlightTK();
  });
})();
//# sourceMappingURL=dev.js.map
