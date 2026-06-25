## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2025-05-18 - Extract Inline Arrays in Render
**Learning:** Creating inline arrays directly inside a component's render function (like in `.map`) causes unnecessary allocations and garbage collection on every render.
**Action:** Extracted static arrays outside the component to prevent recreating the arrays, optimizing memory usage and performance.
