## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Prevent Redundant Array Reallocation in React
**Learning:** Defining static arrays (e.g., `caseFiles`, `credentials`, `experiences`, `services`, `globalCards`) inside React components causes O(N) memory reallocation on every render, and performing dynamic filtering on them without memoization adds redundant computation overhead.
**Action:** Always extract static data arrays outside of the component's render function so they are instantiated once, and use `React.useMemo()` for derived or filtered state (e.g., `filteredProjects`) to prevent unnecessary re-evaluations across renders.
