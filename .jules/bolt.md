## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-12-06 - Extract static arrays from React components
**Learning:** Defining static arrays inline inside a React component (e.g., in a `.map` call) causes unnecessary re-allocations and garbage collection on every render.
**Action:** Always extract static arrays outside the component or use `useMemo` to prevent these allocations, reducing memory overhead.
