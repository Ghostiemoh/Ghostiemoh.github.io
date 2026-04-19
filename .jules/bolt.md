## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Prevent Component Reallocation on Render
**Learning:** In React components like `ProjectGrid.jsx`, large static data arrays (e.g., `caseFiles` or derived `categories` arrays) defined inside the component body are reallocated on every render, causing O(N) operations (e.g., `caseFiles.map()` inside the render function).
**Action:** Extract static data arrays outside the component render function. For derived data that depends on state, use `React.useMemo()` to prevent recalculating on every render.
