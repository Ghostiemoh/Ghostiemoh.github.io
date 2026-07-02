## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-21 - Bypass React Re-renders with Framer Motion v11+
**Learning:** Updating state in response to high-frequency events like scrolling (e.g., `scrollYProgress.onChange`) triggers full component tree re-renders, causing significant performance degradation, particularly in top-level components like `Layout.jsx`.
**Action:** In Framer Motion v11+, directly pass `MotionValue`s (such as those returned by `useTransform`) as children to `<motion.*>` components. This allows Framer Motion to update the DOM directly without triggering the React render cycle.
