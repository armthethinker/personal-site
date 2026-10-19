# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development (watch mode — runs everything in parallel):**
```sh
npm start
```
Runs `clean`, builds the vendor / app / dev-tools JS bundles, compiles SASS, then watches SASS + both JS bundles (esbuild `--watch`) and launches Jekyll with livereload at `http://localhost:4000`.

**Production build:**
```sh
npm run build
```
Runs `clean`, compiles SASS + PostCSS autoprefixer, bundles + minifies the app JS (no dev tools), compiles the build scripts, syncs project front matter from `_data/projects.yml`, hashes assets (renames `main.css`, `vendor.min.js`, and `app.js` with a build hash and writes `_data/manifest.json`), then runs `bundle exec jekyll build` with `JEKYLL_ENV=production`.

**Individual tasks:**
```sh
npm run sass:build       # Compile SASS → assets/css/main.css
npm run js:vendor        # Minify Bootstrap + Masonry → assets/js/vendor.min.js
npm run js:app           # Bundle + minify _js/app → assets/js/app.js (production)
npm run js:app:dev       # Bundle _js/app with sourcemap → assets/js/app.js (dev)
npm run js:dev           # Bundle _js/dev with sourcemap → assets/js/dev.js (dev tools)
npm run scripts:build    # Compile TypeScript build scripts (scripts/ → scripts/build/)
npm run sync-frontmatter # Sync description + image front matter in projects/ from _data/projects.yml
npm run hash             # Hash assets and write _data/manifest.json
bundle exec jekyll serve # Serve only (no JS/CSS rebuild)
npm run imgoptim         # Optimize images via scripts/optimize-images.ts
```

## Architecture

### Stack
Jekyll 4 static site with Bootstrap 5 (SASS source imported selectively), Masonry layout, and a small custom JS bundle. No framework — plain HTML/Liquid templates. The frontend JS lives in `_js/` and is written in TypeScript, bundled with esbuild. Build scripts in `scripts/` are also TypeScript (compiled with `tsc`).

### Asset pipeline
1. **SASS**: `_sass/main.scss` imports selected Bootstrap modules then `_sass/_main.sass`. Custom variables override Bootstrap defaults before import. Component partials live in `_sass/components/`.
2. **JS**: three bundles, all loaded via separate `<script>` tags in `_includes/common-js.html`.
   - `js:vendor` minifies the Bootstrap bundle + Masonry into `assets/js/vendor.min.js` (Terser). Masonry is a runtime global; app code references it via a `declare` so it stays in this cached chunk rather than the app bundle.
   - `js:app` bundles `_js/app/index.ts` into `assets/js/app.js` with esbuild (minified IIFE in production, sourcemapped in dev). This ships in production.
   - `js:dev` bundles `_js/dev/index.ts` into `assets/js/dev.js` (dev tools, e.g. the `TK` highlighter). Built only by `npm start`, never by `npm run build`, and loaded only when `jekyll.environment != "production"`. **Dev tools run on the same `DOMContentLoaded` as the app bundle and must not rebuild the DOM** — never reassign `document.body.innerHTML` (or similar), which detaches the element references the app bundle already captured and silently breaks features like the section nav. `highlight-tk.ts` walks and replaces individual text nodes in place for exactly this reason.
   - `_js/app/` and `_js/dev/` each have an `index.ts` entry plus a `components/` folder. The entry imports one component per line, so a tool/feature can be toggled by commenting a single import. `_js/tsconfig.json` configures type-checking + esbuild target for the frontend (separate from the root `tsconfig.json`, which is for `scripts/`).
3. **Asset hashing**: `scripts/hash-assets.ts` renames `main.css`, `vendor.min.js`, and `app.js` with a random 8-char build hash and writes a manifest to `_data/manifest.json`. Jekyll templates read the hashed paths via `site.data.manifest[...]` with a fallback to the unhashed path (see `_includes/common-header-css.html` and `_includes/common-js.html`). `dev.js` is never hashed (dev-only). In dev (watch mode), no hashing occurs — the fallback paths are used.

### Content model
Project metadata lives in `_data/projects.yml`. Each entry has a `pID` and `short` slug. Project pages (in `projects/`) use `layout: project-page` and set `pID` in frontmatter — the layout loops `site.data.projects` to find the matching entry and assigns it to `p` for use in the template.

The `description` and `image` front matter fields in each project page are generated — do not edit them by hand. They are copied from the matching `projects.yml` entry (`description` → `description`, `imgHero` → `image`) by `npm run sync-frontmatter` (`scripts/sync-project-frontmatter.ts`), which runs automatically as part of `npm run build`. To update them, edit `_data/projects.yml` and re-run the sync.

Project-specific data (cards, challenges, media) lives in `_data/<short>/` subdirectories and is referenced in project pages via `site.data.<short>.*`.

`_data/samsung/patents.yml` entries use: `title`, `titleShort` (display title, falls back to `title`), `description` (plain-language summary shown to users), `abstract` (full technical text, not rendered), `img` (filename relative to `assets/imgopt/samsung/patents/`), `objectPosition`, `year`, `number`, `link`, `status` (Granted / Abandoned), and `inventors`.

### Includes / partials
All reusable content blocks are in `_includes/`. Key ones:
- `cards.html` / `card-big.html` — media cards, typically fed a `data` array from `_data/`
- `media-img.html`, `media-video.html`, `media-youtube.html` — media embeds
- `jumbotron-header.html` — project hero section, reads from `p` (the matched project entry)
- `timeline-entry.html` / `timeline.html` — timeline blocks
- `patents.html` — section wrapper used in the Samsung project page; accepts `header`, `subheader`, `content`, `data`, and `col` parameters. Currently renders both the legacy `.card-patent` grid and the new `patent-item.html` list for side-by-side comparison.
- `patent-item.html` — new-style patent list entry (`.pi` BEM namespace); receives a single `item` from `_data/samsung/patents.yml`. Renders a header row (year · patent number · status), linked title, plain-language `description`, and one or more images. Styled by `_sass/components/patent-item.sass`. Images are sized larger than timeline entry images and sit in a flex row when multiples are present. Status color is inline (no pill background): green for Granted, gray for Abandoned.
- `model-viewer.html` — wraps `<model-viewer>` for 3D/AR assets stored in `assets/models/`
- `navigation-sections.html` — markup for the floating in-page section nav (the `#section-nav` cluster). Accepts a `debug` param. See **Section navigation** below.

### Section navigation (floating breadcrumb)
Project pages render a floating in-page nav: a three-capsule cluster — `‹ previous section | current section › current subsection | next section ›`. Split across three files:
- `_includes/navigation-sections.html` — markup (`#section-nav` container, the `.snav-center` wrapper, the middle `#snav-crumbs` capsule, and the `#snav-prev` / `#snav-next` side capsules).
- `_js/app/components/section-nav.ts` — behavior (`initSectionNav`, run from `_js/app/index.ts`).
- `_sass/components/project-nav.sass` — styling.

Key behaviors (each has a deeper rationale in the source comments):
- **Auto-built from headings.** `collectSections()` reads the rendered `h2.section-header` (major sections) and the `h4`s that follow each (subsections) in document order, skipping anything inside `.project-glance-sec`. Headings without an `id` get a stable slug. Add a section to a page and it appears — no manual upkeep.
- **Scrollspy.** A rAF-throttled scroll/resize handler recomputes the active section (last heading scrolled above the capsule) and re-renders the crumb path; the subsection crumb shows only while you're inside that subsection.
- **Middle stays centered.** `.snav-center` shrink-wraps *only* the middle capsule, so the container's `justify-content-center` pins its center to the viewport center. The side capsules are `position: absolute` off its left/right edges, so they never shift the middle as text changes or as they hide at the first/last section.
- **JS-driven sticky — not `position: sticky`.** The nav starts in normal flow within the content and sticks to the top (`.is-stuck` → `position: fixed`) once scrolled past. A zero-height `.snav-sentinel` inserted before it marks the original spot and grows to the nav's height while stuck so content below doesn't jump. CSS `position: sticky` is unusable here because `html`/`body` set `overflow-x: hidden`, which makes `overflow-y` compute to `auto` — sticky then resolves its scrollport to a box that never scrolls. `STICK_OFFSET` in the TS must match `.section-nav.is-stuck { top }` in the SASS. In-flow spacing is `padding`, not `margin`, because the sentinel reserves `offsetHeight` (which includes padding, not margins).
- **Responsive first-word crumb.** Below the `md` breakpoint, when a subsection crumb is visible the major-section crumb collapses to just its first word; at `md`+ it shows in full. The toggle is pure CSS (`.snav-crumb-major:not(:last-child)` + `+media-breakpoint-up(md)`); the JS supplies both a `.snav-crumb-full` and a `.snav-crumb-first` span on the major crumb so CSS can pick which to show.
- **Debug panel (opt-in).** Include with `debug=true` outside production to emit a `.snav-debug-container`; `initSectionNav` then renders a hierarchy dump + a live scroll-state line into it (and does zero debug work when the container is absent). `project-page.html` sets `{% assign debug = false %}` and passes `debug=debug` to the include — flip that assign to turn it on.

### Layouts
- `default.html` — base layout, wraps content in `container-fluid`, includes footer and JS
- `project-page.html` — extends default, adds the `<body class="project-{{p.short}}">` hook and jumbotron header; resolves `p` from `_data/projects.yml`

### `_config.yml` notes
- `assets/img/` is excluded from Jekyll processing (use `assets/imgopt/` for optimized images referenced in templates)
- `timeline.html` is also excluded from Jekyll (it's a standalone scratch/dev file)

## Code styling
## TypeScript / JavaScript Style

Follow the @fat (Jacob Thornton) school of thought — lean on ASI and keep the noise down.

- **Prefer TypeScript** so we have good type safety.
- **No semicolons.** Let the compiler/parser handle statement termination. The one exception: a leading `;` to guard a line that starts with `(` or `[`.
- **Single quotes** for strings (`'hello'`, not `"hello"`). Template literals when interpolating.
- **3-space indentation**, no tabs.
- `const` by default; `let` when reassignment is genuinely needed; never `var`.
- **Arrow functions** for inline expressions, callbacks, and object methods. Use named `function` declarations for top-level, exported, or recursive functions — they hoist, read clearly, and show up better in stack traces and DevTools.
- Trailing commas in multi-line structures (arrays, objects, params) — makes diffs cleaner.
- One blank line between logical blocks; no blank lines at the top/bottom of a function body.
- Opening braces on the same line, always.
- Comments should not wrap (let the IDE handle that)
- If the file is under 100 lines, do not use section comments (e.g. `// --- Rendering the breadcrumb trail -----------`)
- If the file is 100 or more lines, you can group related code with regions. To start a region: `// region [Region name]`. To end a region: `// endregion`. Code regions may be nested.
- Inline comments are not acceptable as top level documentation (e.g. don't use `// creates a crumb` over `function createCrumb() {}`). 

```ts
// top-level: named declaration
export function fetchUser(id: string) {
  return fetch(`/api/users/${id}`)
}

// inline / callback: arrow
const active = users.filter(u => u.active)

setTimeout(() => refresh(), 1000)

// object method: arrow so `this` is the enclosing scope
class Timer {
  seconds = 0
  start() {
    setInterval(() => { this.seconds++ }, 1000)
  }
}
```