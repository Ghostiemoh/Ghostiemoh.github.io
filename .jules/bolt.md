## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2026-08-10 - Prevent React Re-renders in Continuous Animations
**Learning:** Using `useState` with `setInterval` or `requestAnimationFrame` to drive continuous animations (like counting numbers up) causes excessive React re-renders, blocking the main thread and degrading performance.
**Action:** Use Framer Motion's `useMotionValue`, `useTransform`, and `animate()` to directly manipulate the DOM and bypass the React render cycle entirely for continuous numeric animations. The `MotionValue` must be passed as the direct, single child of a `<motion.*>` component.
