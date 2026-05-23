## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-11-20 - Optimize Counter Animations
**Learning:** Counter animations using `setInterval` and `useState` cause excessive React re-renders and high CPU overhead, especially on scroll.
**Action:** Use Framer Motion's `useSpring` and `useTransform` with `motion.span` to animate the text directly in the DOM, completely bypassing React's reconciliation cycle. Note: The `duration` in `useSpring` must be in seconds, and all suffix formatting must happen within `useTransform` because a `MotionValue` requires it to be the sole child of a `motion` component.
