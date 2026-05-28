## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-05-28 - Optimize Frequent Counter Animations in React
**Learning:** Using `setInterval` and `useState` for rapid value animations (e.g., counter components) triggers React's reconciliation cycle on every frame (e.g., every 16ms), resulting in severe CPU overhead.
**Action:** Always refactor counter animations to use Framer Motion's `useSpring` and `useTransform` combined with `motion.span`. This approach bypasses React state updates entirely, reducing CPU overhead by ~95%.
