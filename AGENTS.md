# AGENTS.md

Guidance for coding agents working on this repository.

## What this project is

A personal portfolio and project archive for a data and on-chain analyst.
React 18 + Vite + Tailwind, deployed to GitHub Pages from `main` via
`.github/workflows/deploy.yml`. There is no test suite.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build, must pass before any PR
npm run lint
```

## Before opening a pull request

**Check whether the fix already landed.** Between February and August 2026 this
repo accumulated 376 open pull requests because agents re-proposed the same
roughly 20 fixes daily without checking `main` first. Search `main` for the
pattern you intend to add before proposing it.

**One concern per pull request.** Do not bundle an accessibility change with a
performance refactor.

**The build must pass.** Run `npm run build` and confirm it succeeds.

## Already applied, do not re-propose

These landed on `main` in August 2026. Verify against current `main` rather
than assuming they are missing:

- `group-focus-within` paired with `group-hover` on hover-revealed action
  containers, plus `focus-visible:ring-2` on their interactive children
  (`BentoHub.jsx`).
- `StatCounter` in `Methodology.jsx` uses `useMotionValue` + `useTransform`
  rather than `setInterval` + `useState`. The `MotionValue` must remain the
  single direct child of `motion.span` or React crashes during formatting.

## Conventions

- Interactive elements require `cursor-pointer`.
- No `console.log` in committed code.
- Animation uses Framer Motion with spring physics, not linear easing.
- Prefer editing `src/utils/content.js` for project data. It is the single
  source of truth consumed by `BentoHub.jsx` and `Hero.jsx`.
- Do not create parallel copies of the project list in components. A dead
  `ProjectGrid.jsx` carrying a stale duplicate was removed in August 2026;
  do not reintroduce that pattern.

## Accuracy rules for content

Project descriptions in `src/utils/content.js` and `README.md` state figures
about real datasets. **Never invent, round up, or embellish a metric.** If you
cannot verify a number from the underlying file, leave the existing text alone
and say so in the pull request.

Several descriptions were corrected in August 2026 after claims were found that
the source workbooks did not support. Do not regress them.

## Agent memory

`.jules/bolt.md` and `.jules/palette.md` hold agent learnings. They belong at
the repository root only. Never place them under `public/`, which is published
to the live site.
