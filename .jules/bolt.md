## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-21 - Optimize React Component Renders by Extracting Static Data
**Learning:** Defining static data arrays (e.g., configurations, project lists, credentials) inside a React component's body causes O(N) reallocation and recalculation on every render.
**Action:** Ensure static data arrays are defined outside the component's render function, and use `React.useMemo()` for dynamic derived state (like filtering) to prevent unnecessary computations and memory allocations during render cycles.
