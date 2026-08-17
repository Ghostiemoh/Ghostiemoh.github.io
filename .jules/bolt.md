## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.
## 2026-08-13 - Optimizing React Animations in Framer Motion apps
**Learning:** The `StatCounter` component in `Methodology.jsx` uses `setInterval` combined with React state (`useState`) to animate numbers, causing unnecessary re-renders ~60 times a second for multiple elements at once (125 times per element based on 2000ms duration and 16ms interval).
**Action:** When animating numbers with Framer Motion, bypass React state entirely by using `useMotionValue`, `animate`, and `useTransform`. Ensure the `MotionValue` is rendered as the *single, direct child* of a `<motion.span>` component to avoid fatal React crashes during formatting.
## 2026-08-17 - Optimizing React Parent-Child Re-renders
**Learning:** In a React application, when a parent component updates its state, all its child components will re-render by default, even if they don't receive any props or depend on that state.
**Action:** Use `React.memo()` to wrap static child components or components whose props haven't changed. This prevents unnecessary re-renders and improves performance, especially for components containing complex DOM trees or animations.
