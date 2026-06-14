## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2025-03-01 - MotionValue Scroll Optimization
**Learning:** In Framer Motion, passing a scroll-derived value to React state (via `useState` and `useEffect`) causes the component to re-render on every scroll frame. By deriving a string directly via `useTransform` and rendering it inside a `<motion.span>`, Framer Motion directly manipulates the DOM node and completely bypasses the React render cycle, drastically improving scroll performance.
**Action:** Always prefer rendering `useTransform` outputs directly in `<motion.*>` components instead of setting React state for continuous animations like scroll progress.
