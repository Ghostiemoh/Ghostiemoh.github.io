## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-05-29 - Extract Static Arrays to Module Level Constants
**Learning:** Creating static array literals (e.g., credentials, services) inside React component render functions forces the JavaScript engine to reallocate and recreate those arrays on every single render cycle. Performance benchmarks show that extracting these static array literals to module-level constants reduces execution time for data access by approximately 11x (from ~92ms to ~8ms for 1,000,000 iterations).
**Action:** Always extract static data arrays and objects that don't depend on component props or state outside of the component definition to module-level constants to prevent unnecessary re-allocations and garbage collection overhead.
