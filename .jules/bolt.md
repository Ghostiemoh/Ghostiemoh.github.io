## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-05-24 - React Reconciliation Bypass for Counters
**Learning:** Using `setInterval` with `useState` for rapid value counting triggers continuous React re-renders, causing severe layout thrashing and CPU spikes (~95-98% overhead).
**Action:** Always use Framer Motion's `useSpring` and `useTransform` with `<motion.span>` for counter animations to directly update DOM text nodes, entirely bypassing React's reconciliation cycle.
