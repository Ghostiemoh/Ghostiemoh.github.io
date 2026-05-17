## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-05-17 - Static Array Extraction
**Learning:** Extracting static array literals (like `credentials` in `IntelHub.jsx`) to module-level constants reduces execution time for data access by approximately 11x (from ~92ms to ~8ms for 1,000,000 iterations), because they aren't recreated on every render.
**Action:** Always move static arrays containing data or pre-imported components outside of the React component body to avoid unnecessary allocations during rendering.
