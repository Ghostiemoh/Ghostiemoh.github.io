## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Memoizing static data and derived state
**Learning:** To prevent unnecessary O(N) reallocation and recalculation on every render in React components, ensure static data arrays are defined outside the component's render function, and use React.useMemo() for dynamic derived state.
**Action:** Always extract static arrays (like caseFiles) to the file scope and use `React.useMemo` to cache expensive derivations (like filtering based on state) to optimize render cycles.
