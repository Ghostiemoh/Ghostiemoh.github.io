## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Optimize Animated Counters
**Learning:** Using `setInterval` with `useState` to animate numerical counters triggers a React state update and re-render on every frame (e.g., every 16ms). This causes significant main thread bloat and performance degradation, bypassing React's reconciliation efficiency.
**Action:** Always use Framer Motion's `useSpring` and `useTransform` with `motion.span` for continuous value animations. This delegates the animation to the compositor thread/Framer's internal loop, entirely bypassing the React rendering cycle.
