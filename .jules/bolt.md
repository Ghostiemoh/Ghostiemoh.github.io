## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-11-20 - Use Framer Motion Transform for scroll value display
**Learning:** Attaching `useState` and `useEffect` to `scrollYProgress.onChange` triggers React component root-level re-renders during scrolling, harming performance.
**Action:** Use `useTransform` to derive values and display them via `<motion.div>` or `<motion.span>`. This updates the DOM directly without triggering a React render cycle.
