## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Extract Static Arrays from React Render Functions
**Learning:** Defining static data arrays (e.g., configurations, static lists) inside a React component's render function causes unnecessary O(N) array reallocation and potentially expensive object creation on every single re-render. This can lead to significant performance degradation, especially in complex components or during frequent updates (like scroll events).
**Action:** Always declare static data arrays and configuration objects outside the component's render function to ensure they are created only once per module load. If the array derivation depends on props or state, use `React.useMemo()` to prevent unnecessary recalculation.
