## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Optimize React Counter Animations
**Learning:** Using setInterval with useState to drive frequent numeric animations triggers continuous React component re-renders, causing significant CPU overhead and potential jank.
**Action:** Refactor counter animations to use Framer Motion's useMotionValue, useSpring, and useTransform with motion.span (or motion.div). This completely bypasses the React reconciliation cycle for frequent updates, reducing CPU overhead by ~95-98%.
