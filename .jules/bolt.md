## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2025-02-17 - Optimize continuous scroll value rendering
**Learning:** Syncing continuous scroll values (like `scrollYProgress`) to React state via `useState` causes the component to re-render on every frame.
**Action:** Use `useTransform` and render the output directly inside a `<motion.*>` component to bypass the React render cycle entirely.
