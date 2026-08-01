## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Prevent Layout Re-renders on Scroll with Framer Motion
**Learning:** React state updates (`useState`) triggered by scroll event listeners (like `scrollYProgress.onChange`) cause the component and all its children to re-render on every scroll tick. For a root-level component like `Layout`, this is a massive performance bottleneck.
**Action:** Use Framer Motion's `useTransform` to convert the scroll value to the desired format (e.g., a string with '%'), and pass this `MotionValue` directly as the *single, direct child* of a `<motion.*>` element. This bypasses React's render lifecycle entirely and updates the DOM directly.
