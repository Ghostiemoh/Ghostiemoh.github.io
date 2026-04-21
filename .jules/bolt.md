## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Prevent Re-allocation of Static Arrays in React Render Loop
**Learning:** Defining large static arrays (like data lists) and computing derived properties (like unique categories) inside a React component's body causes O(N) reallocation and recalculation on every render. This creates unnecessary garbage collection pressure and CPU overhead.
**Action:** Always move static data arrays outside the component's render function to instantiate them once. For any dynamic derived state based on props or component state, wrap the computation in `React.useMemo()` to ensure it only recalculates when dependencies change.
