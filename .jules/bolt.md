## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
## 2026-08-07 - Prevent Layout Re-renders on Scroll
**Learning:** Directly binding continuous scrolling values to React state triggers expensive full-app re-renders, especially when placed in the root Layout component.
**Action:** Use Framer Motion's `useTransform` to create a `MotionValue` with formatted strings and pass it as a single child to a `<motion.*>` component to bypass React's render phase entirely.
