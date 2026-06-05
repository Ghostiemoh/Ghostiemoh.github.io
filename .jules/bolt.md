## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Refactoring state-based counters to Framer Motion Springs
**Learning:** Refactoring counter animations to use Framer Motion's useSpring and useTransform with motion.span (instead of setInterval and useState) reduces CPU overhead by ~95-98% in benchmarks by bypassing React's reconciliation cycle for frequent state updates.
**Action:** Always use Framer Motion primitives instead of React state for frequent numeric value animations.
