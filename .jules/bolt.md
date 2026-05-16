## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-05-16 - Bypassing React's Re-renders for Continuous Animations
**Learning:** Using `setState` inside `setInterval` or `useScroll`'s `onChange` event causes React to completely re-render the component roughly every 16ms, creating substantial CPU overhead during continuous animations or scrolling.
**Action:** Always refactor constant stream values to Framer Motion's `useSpring` and `useTransform`, and render them directly using `motion.span` (e.g. `{displayValue}`) instead of managing via state variables. This bypasses React's reconciliation cycle entirely.
