## 2024-11-20 - Optimize Font Loading in Vite Projects
**Learning:** Using `@import` inside a CSS file (like `index.css`) for loading external fonts in a Vite/React project creates a serial request chain. The browser must first download and parse the CSS before it can initiate the font download. This blocks rendering and negatively impacts First Contentful Paint (FCP).
**Action:** Always define external font requests (e.g., Google Fonts) using `<link rel="stylesheet">` tags, along with `<link rel="preconnect">` for the font domain, directly in `index.html`. This allows the browser to discover and download the fonts in parallel with other assets.

## 2024-05-24 - Framer Motion `useScroll` Triggering React Renders
**Learning:** In Framer Motion, avoid passing continuous animations (like scroll progress) to React state (via `useState`), as this causes the component to re-render on every frame (e.g. `const [percent, setPercent] = useState(0); scrollYProgress.onChange(v => setPercent(v * 100))`).
**Action:** Use `useTransform` and render the output directly inside a `<motion.*>` component to bypass the React render cycle entirely. For example, `const percent = useTransform(scrollYProgress, v => Math.round(v * 100) + "%");` inside `<motion.span>{percent}</motion.span>`.

## 2024-05-24 - React State inside Animation Counters causing heavy renders
**Learning:** Using `setInterval` coupled with `setState` inside components for simple count-up animations creates heavy main-thread blocking operations through hundreds of sequential React re-renders.
**Action:** Use Framer Motion's `animate` function directly on a `useMotionValue` wrapped inside a `<motion.span>`, rendering the value via `useTransform` to bypass the React rendering engine completely.
