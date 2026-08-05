## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2025-05-16 - Optimizing counters with Framer Motion
**Learning:** Using `setInterval` and `useState` for fast counters causes hundreds of unnecessary React component re-renders.
**Action:** Use Framer Motion's `useMotionValue` and `animate`, coupled with `useTransform` to bypass React's render phase. Always format strings inside `useTransform` instead of mixing MotionValues with text in JSX to prevent fatal React crashes.
