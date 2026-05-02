## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-12-07 - Extract Static Arrays and Memoize Derived State in React Components
**Learning:** Defining static arrays inside a React functional component causes the array to be reallocated on every render (e.g., from scrolling or state changes). When this array is subsequently used for derived state calculations (like creating a Set of unique categories or filtering items), the recalculation overhead scales to O(N).
**Action:** Extract static data arrays outside of the component's render function, and use `React.useMemo` for derived state filtering to prevent unnecessary re-computations and optimize performance.
