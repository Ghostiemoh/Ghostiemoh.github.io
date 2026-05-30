## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Refactoring Frequent State Updates for Animations
**Learning:** Animating numbers with `setInterval` and React's `useState` triggers rapid, full component re-renders (e.g., every 16ms), resulting in severe CPU overhead and performance degradation, especially with multiple concurrent animations.
**Action:** For continuous or frequent animations (like counters), use Framer Motion's `useSpring` and `useTransform` mapped directly to a `<motion.span>`. This completely bypasses React's reconciliation cycle during the animation, updating the DOM directly and reducing overhead dramatically.
