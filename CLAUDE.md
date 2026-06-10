# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development (watch mode — runs everything in parallel):**
```sh
npm start
```
Runs `clean`, compiles SASS, starts JS/TS watchers, and launches Jekyll with livereload at `http://localhost:4000`.

**Production build:**
```sh
npm run build
```
Runs `clean`, compiles SASS + PostCSS autoprefixer, minifies JS, compiles TS, hashes assets (renames `main.css` and `main.min.js` with a build hash and writes `_data/manifest.json`), then runs `bundle exec jekyll build`.

**Individual tasks:**
```sh
npm run sass:build       # Compile SASS → assets/css/main.css
npm run js:build         # Bundle + minify JS → assets/js/main.min.js
npm run ts:build         # Compile TypeScript scripts/
npm run hash             # Hash assets and write _data/manifest.json
bundle exec jekyll serve # Serve only (no JS/CSS rebuild)
npm run imgoptim         # Optimize images via scripts/optimize-images.ts
```

## Architecture

### Stack
Jekyll 4 static site with Bootstrap 5 (SASS source imported selectively), Masonry layout, and a small custom JS bundle. No framework — plain HTML/Liquid templates. TypeScript is only used for build scripts (`scripts/`), not the frontend.

### Asset pipeline
1. **SASS**: `_sass/main.scss` imports selected Bootstrap modules then `_sass/_main.sass`. Custom variables override Bootstrap defaults before import. Component partials live in `_sass/components/`.
2. **JS**: `npm run js:build` concatenates Bootstrap bundle + Masonry + `_js/main.js` into `assets/js/main.min.js` via Terser.
3. **Asset hashing**: `scripts/hash-assets.ts` renames `main.css` and `main.min.js` with a random 8-char build hash and writes a manifest to `_data/manifest.json`. Jekyll templates read the hashed paths via `site.data.manifest['main.css']` with a fallback to the unhashed path (see `_includes/common-header-css.html` and `_includes/common-js.html`). In dev (watch mode), no hashing occurs — the fallback paths are used.

### Content model
Project metadata lives in `_data/projects.yml`. Each entry has a `pID` and `short` slug. Project pages (in `projects/`) use `layout: project-page` and set `pID` in frontmatter — the layout loops `site.data.projects` to find the matching entry and assigns it to `p` for use in the template.

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

### Layouts
- `default.html` — base layout, wraps content in `container-fluid`, includes footer and JS
- `project-page.html` — extends default, adds the `<body class="project-{{p.short}}">` hook and jumbotron header; resolves `p` from `_data/projects.yml`

### `_config.yml` notes
- `assets/img/` is excluded from Jekyll processing (use `assets/imgopt/` for optimized images referenced in templates)
- `timeline.html` is also excluded from Jekyll (it's a standalone scratch/dev file)
