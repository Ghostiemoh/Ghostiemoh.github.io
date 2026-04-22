## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Prevent O(N) Array Reallocation on React Renders
**Learning:** Defining static arrays (e.g., configurations, project listings) inside a React functional component causes them to be re-allocated in memory on every render. If these arrays are large or filtered/mapped dynamically, and the component re-renders frequently (e.g., due to `framer-motion`'s `useScroll`), it blocks the main thread and creates unnecessary garbage collection pressure.
**Action:** Always hoist static data arrays and constants *outside* the React component's function body so they are only allocated once. For dynamically filtered arrays, use `React.useMemo` to prevent recalculation unless dependencies change.
