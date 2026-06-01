## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Extract Static Arrays to Prevent Re-allocation
**Learning:** Static arrays or data structures defined inside React functional components are re-allocated in memory on every single render. This introduces unnecessary overhead, especially for larger arrays or arrays containing complex JSX objects.
**Action:** Always extract static data structures (like lists of credentials, features, or configuration objects) outside the component body into module-level constants. This is safe even if the array contains JSX elements, provided those components don't rely on component state or props.
