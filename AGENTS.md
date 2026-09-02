# AGENTS.md

Guidance for coding agents working on this repository.

## What this project is

A personal portfolio for a data analyst. A single-page site at `/` plus a small
Markdown-backed writing section at `/writing`. React 18 + Vite, with Tailwind
used only for its preflight reset; the visual system is hand-authored CSS in
`src/index.css`. Deployed to GitHub Pages from `main` via
`.github/workflows/deploy.yml`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build, must pass before any change lands
npm test         # vitest, must pass before any change lands
```

There is no lint script and no ESLint config in this repo.

## Architecture

- `src/utils/portfolioData.js` is the single source of truth for all content:
  profile, `services` (client engagement offers), case studies, the shelf list,
  method, capabilities, credentials. Components never hold their own copy of
  project data. Every case study carries a one-line `outcome`; card groups in
  the shelf may carry a `note`.
- `src/App.jsx` is the whole UI in one file: header, hero, work (featured plus
  standard case studies), method, proof, contact. Keep it one file unless it
  passes ~600 lines.
- `src/utils/motion.js` holds the single reveal-on-scroll hook and its timing
  tokens. Do not add a motion library; framer-motion was removed on purpose.
- Charts are inline `<svg>` built by `BarFigure` in `App.jsx` from the `chart`
  object on a featured case study. See `brand.md` for the figure rules.

## Writing section

- Posts are Markdown files in `src/content/writing/*.md` with a `---` frontmatter
  block (`title`, `date` as `YYYY-MM-DD`, `description`). The file name is the URL
  slug. To publish a post, add a file; nothing else is required in code.
- Images: drop the file in `public/images/writing/` and reference it as
  `![alt](/images/writing/name.png "Optional caption")`. The Markdown `title`
  (the quoted part) renders as a `<figcaption>`. Keep images under ~300 KB and
  about 1600 px wide; there is no build-time image optimisation.
- `src/pages/writingData.js` loads them at build time with `import.meta.glob`,
  parses the frontmatter, computes reading time, and renders the body with
  `marked`. Writing content is first-party and trusted, so raw HTML passes
  through.
- `src/main.jsx` picks the view from `window.location.pathname`: `/` renders
  `App`, `/writing` and `/writing/<slug>` render the lazy-loaded writing pages
  (this keeps `marked` out of the homepage bundle).
- Deep links work on GitHub Pages via `public/404.html` (redirect) and a small
  decoder in `index.html`. Keep both if you touch routing.
- After adding or renaming a post, update `public/sitemap.xml`.
- The same no-dash and never-invent-a-number rules apply to post copy;
  `src/pages/writingData.test.js` enforces the dash rule.

## Content accuracy rules

**Never invent, round up, or embellish a metric.** Every figure in
`portfolioData.js` traces to a workbook in `/public/projects` or a linked
repository. Real numbers were pulled from those workbooks in 2026; if you cannot
verify a number from the source, leave the text alone and say so.

The fake AI-generated dashboard screenshots that used to live in
`public/thumbnails/` were deleted for carrying impossible values. Do not
reintroduce raster screenshots of dashboards, with one narrow exception:
`public/images/dune-dex-crash.jpg` is a genuine screenshot of the author's own
live, public Dune dashboard, embedded in the DX-07 case with a caption and a
link to the source. Real, first-party, verifiable screenshots of live work are
allowed. Invented or decorative ones are not.

## Conventions

- No em dashes or en dashes in any user-facing string. `portfolioData.test.js`
  enforces this for the data file; hold the same rule everywhere else.
- Interactive elements need a visible `:focus-visible` state.
- No `console.log` in committed code.
- Accent colour marks one thing per view. Do not spread it.
- Keep `brand.md` in sync with any change to palette, type, figures, or motion.

## Agent memory

`.jules/bolt.md` and `.jules/palette.md` hold agent learnings and belong at the
repository root only. Never place them under `public/`.
