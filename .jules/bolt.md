## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-05-24 - Bypass React Re-renders for Continuous Values
**Learning:** Using `setInterval` and `useState` for rapid numeric animations (like counting up) forces React to re-render the component (and potentially its tree) on every tick (e.g., ~60fps). This creates unnecessary main-thread blocking and garbage collection.
**Action:** When animating continuous numbers in Framer Motion, use `useMotionValue`, `useTransform`, and pass the transformed value directly into a `motion.*` element. Framer Motion will directly update the DOM node, completely bypassing the React render cycle during the entire animation.
