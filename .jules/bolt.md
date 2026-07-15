## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-11-20 - Prevent Unnecessary Render Allocations
**Learning:** Initializing static inline arrays (e.g., `["SQL", "Excel", ...]`) directly within a component's render function (like inside `.map()`) causes new memory allocations and subsequent garbage collection on every single render cycle.
**Action:** Always extract static array or object declarations into module-level constants outside the component definition to reduce memory overhead and prevent GC spikes.
