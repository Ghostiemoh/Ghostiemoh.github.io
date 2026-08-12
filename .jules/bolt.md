## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2026-08-12 - By-passing React renders with Framer Motion Values
**Learning:** In Framer Motion, passing continuously updating values (like scroll progress) into React state (e.g., `useState`) triggers a full component re-render on every frame.
**Action:** Always use `useTransform` combined with a `<motion.*>` component (e.g., `<motion.span>`) passing the `MotionValue` directly as a child to update the DOM directly, completely bypassing React's render loop. Remember that the `MotionValue` must be the single direct child of the motion element to avoid crashes.
