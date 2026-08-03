## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2026-08-03 - Bypass React Re-renders for Continuous Animations
**Learning:** Using `setInterval` to continuously update React state (e.g., for numerical counters) causes excessive re-renders (60 FPS rendering cycles) and degrades main thread performance in React applications.
**Action:** In Framer Motion v11+ projects, always use `useMotionValue`, `animate`, and `useTransform` to manage continuous values, passing the `MotionValue` as the sole child of a `<motion.*>` component to update the DOM directly, bypassing the React render cycle entirely.
