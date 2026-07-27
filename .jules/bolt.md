## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-11-20 - Extract Static Arrays in React Components
**Learning:** In React components within this codebase, static literal arrays defined inline (e.g., inside `.map()`) or within the component scope are re-allocated on every re-render, leading to unnecessary memory pressure and garbage collection overhead.
**Action:** Extract all completely static arrays and configurations to module-level constants outside of the component function to guarantee a stable reference and reduce memory allocations during component lifecycle updates.
