## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Framer Motion Value Direct Rendering
**Learning:** In Framer Motion v11+, passing a `MotionValue` directly as a child to a `<motion.*>` component (e.g., `<motion.span>{motionValue}</motion.span>`) is highly performant and bypasses React re-renders. However, if the `MotionValue` is mixed with other elements or strings (e.g., `<motion.span>{displayPercent}%</motion.span>`), it causes a fatal React crash.
**Action:** Always format strings and combining values inside a `useTransform` hook, and pass the resulting single `MotionValue` as the sole, direct child of the motion element. Use `animate` to drive the `MotionValue` without triggering `useState` renders.
