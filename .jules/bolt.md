## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2024-05-18 - Framer Motion useScroll optimization
**Learning:** In Framer Motion, passing continuous values (like scroll progress from `useScroll`) into React state via `useState` and an `onChange` listener forces the component to constantly re-render on every frame of the scroll. This is a massive performance bottleneck.
**Action:** Always bypass the React rendering cycle by using Framer Motion's `useTransform` hook to manipulate values directly, and render the output within a `<motion.*>` component.
