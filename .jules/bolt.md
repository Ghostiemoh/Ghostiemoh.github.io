## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-11-20 - Optimizing Continuous Values with Framer Motion
**Learning:** Using React state (e.g., `useState`) to track continuous values like scroll progress (`useScroll().scrollYProgress.onChange`) triggers excessive re-renders of the component and its children on every tick.
**Action:** Always use `useTransform` to compute formatted strings directly from `MotionValue`s, and pass the resulting `MotionValue` as the direct, sole child of a `<motion.*>` component. This bypasses the React render cycle completely.
