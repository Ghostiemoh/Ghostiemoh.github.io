## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2025-02-12 - Re-renders in Framer Motion animations
**Learning:** When using Framer Motion to animate continuous values (like a number counter), React's `setState` in a `setInterval` or `requestAnimationFrame` loop causes unnecessary re-renders (e.g., 60fps) of the entire component.
**Action:** Use Framer Motion's `useMotionValue`, `useTransform`, and `animate` instead. By directly animating a motion value and passing the transformed output to a `<motion.span>` child, the animation updates at 60fps without triggering React's render phase.
