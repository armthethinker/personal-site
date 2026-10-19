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

  // _js/app/components/section-nav.ts
  var ACTIVE_THRESHOLD = 24;
  var STICK_OFFSET = 16;
  function slugify(text) {
    return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  }
  function isVisible(el) {
    return !!(el && el.offsetParent !== null);
  }
  function rafThrottle(fn) {
    let ticking = false;
    return () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        fn();
        ticking = false;
      });
    };
  }
  function collectSections(pageBody) {
    const usedIds = {};
    const makeId = (text) => {
      const base = slugify(text) || "section";
      let id = base;
      while (usedIds[id] || document.getElementById(id)) {
        usedIds[base] = (usedIds[base] || 0) + 1;
        id = `${base}-${usedIds[base]}`;
      }
      usedIds[id] = 1;
      return id;
    };
    const isSectionHeader = (h) => !h.closest(".project-glance-sec") && (h.textContent ?? "").trim() !== "";
    const sections = Array.from(
      pageBody.querySelectorAll("h2.section-header")
    ).filter(isSectionHeader).map((h) => {
      if (!h.id) h.id = makeId(h.textContent ?? "");
      return { header: h, id: h.id, text: (h.textContent ?? "").trim(), subs: [] };
    });
    let current = null;
    pageBody.querySelectorAll("h2.section-header, h4").forEach((h) => {
      if (h.tagName === "H2") {
        current = h.classList.contains("section-header") && isSectionHeader(h) ? sections.find((s) => s.header === h) ?? null : null;
        return;
      }
      const text = (h.textContent ?? "").trim();
      if (!current || !text) return;
      if (!h.id) h.id = makeId(text);
      current.subs.push({ header: h, id: h.id, text });
    });
    return sections;
  }
  function computeActive(sections, threshold) {
    const isPast = (h) => isVisible(h) && h.getBoundingClientRect().top <= threshold;
    let index = 0;
    sections.forEach((s, i) => {
      if (isPast(s.header)) index = i;
    });
    const section = sections[index];
    const path = [{ id: section.id, text: section.text }];
    let sub = null;
    for (const s of section.subs) if (isPast(s.header)) sub = s;
    if (sub) path.push({ id: sub.id, text: sub.text });
    return { index, path };
  }
  function renderSide(el, section) {
    if (!section) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.href = `#${section.id}`;
    el.textContent = "";
    const label = el.appendChild(document.createElement("span"));
    label.className = "snav-side-label";
    label.textContent = section.text;
  }
  function renderCrumbs(container, path) {
    container.innerHTML = "";
    path.forEach((crumb, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "snav-crumb-sep";
        sep.setAttribute("aria-hidden", "true");
        sep.textContent = "\u203A";
        container.appendChild(sep);
      }
      const a = document.createElement("a");
      a.className = "snav-crumb";
      a.href = `#${crumb.id}`;
      if (i === 0) {
        a.classList.add("snav-crumb-major");
        const full = a.appendChild(document.createElement("span"));
        full.className = "snav-crumb-full";
        full.textContent = crumb.text;
        const first = a.appendChild(document.createElement("span"));
        first.className = "snav-crumb-first";
        first.textContent = crumb.text.split(/\s+/)[0] || crumb.text;
      } else {
        a.textContent = crumb.text;
      }
      container.appendChild(a);
    });
  }
  function renderDebug(container, sections) {
    container.textContent = "";
    const lines = [`sections found: ${sections.length}`, ""];
    sections.forEach((s) => {
      lines.push(`H2  #${s.id}  \u2014  ${s.text}  (subs: ${s.subs.length})`);
      s.subs.forEach((sub) => lines.push(`     H4  #${sub.id}  \u2014  ${sub.text}`));
    });
    const panel = document.createElement("div");
    panel.id = "snav-debug";
    panel.className = "snav-debug";
    const live = document.createElement("div");
    live.id = "snav-live";
    panel.appendChild(live);
    const pre = document.createElement("pre");
    pre.textContent = lines.join("\n");
    panel.appendChild(pre);
    container.appendChild(panel);
    return live;
  }
  function initSectionNav() {
    const pageBody = document.querySelector(".page-body");
    const nav = document.getElementById("section-nav");
    const crumbs = document.getElementById("snav-crumbs");
    if (!pageBody || !nav || !crumbs) return;
    const sections = collectSections(pageBody);
    const debugContainer = document.querySelector(".snav-debug-container");
    const live = debugContainer ? renderDebug(debugContainer, sections) : null;
    if (sections.length === 0) {
      crumbs.textContent = "(no sections found)";
      return;
    }
    const prev = document.getElementById("snav-prev");
    const next = document.getElementById("snav-next");
    const sentinel = document.createElement("div");
    sentinel.className = "snav-sentinel";
    sentinel.setAttribute("aria-hidden", "true");
    nav.parentElement?.insertBefore(sentinel, nav);
    const activeLine = () => nav.getBoundingClientRect().bottom + ACTIVE_THRESHOLD;
    const update = () => {
      const stuck = sentinel.getBoundingClientRect().top <= STICK_OFFSET;
      sentinel.style.height = stuck ? `${nav.offsetHeight}px` : "0px";
      nav.classList.toggle("is-stuck", stuck);
      const line = activeLine();
      const { index, path } = computeActive(sections, line);
      if (prev) renderSide(prev, sections[index - 1]);
      renderCrumbs(crumbs, path);
      if (next) renderSide(next, sections[index + 1]);
      if (live)
        live.textContent = `scrollY=${Math.round(window.scrollY)}  stuck=${stuck}  line=${Math.round(line)}  active=[${path.map((c) => c.text).join(" \u203A ")}]`;
    };
    const onScroll = rafThrottle(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  // _js/app/index.ts
  function run(feature) {
    try {
      feature();
    } catch (e) {
      console.error(e);
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    run(initMasonry);
    run(initSectionNav);
  });
})();
//# sourceMappingURL=app.js.map
