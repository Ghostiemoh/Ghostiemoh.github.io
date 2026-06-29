## 2024-05-18 - Continuous scroll progress triggers React re-renders

**Learning:** When using Framer Motion's `useScroll`, extracting a continuous value like `scrollYProgress` and storing it into React component state (e.g., via `useState` and `onChange`) forces the entire component to re-render on *every single frame* during a scroll. This can significantly degrade scroll performance and jank the animation.

**Action:** Avoid passing continuous animations to React state. Instead, use Framer Motion's `useTransform` and bind it directly to the `style` prop of a `<motion.*>` component or map it to output using a `motionValue`. This bypasses the React render cycle and calculates the styles completely off the main thread where possible.

## 2024-11-20 - Continuous scroll progress triggers React re-renders

**Learning:** When using Framer Motion's `useScroll`, extracting a continuous value like `scrollYProgress` and storing it into React component state (e.g., via `useState` and `onChange`) forces the entire component to re-render on *every single frame* during a scroll. This can significantly degrade scroll performance and jank the animation.

**Action:** Avoid passing continuous animations to React state. Instead, use Framer Motion's `useTransform` and bind it directly to the `style` prop of a `<motion.*>` component or map it to output using a `motionValue`. This bypasses the React render cycle and calculates the styles completely off the main thread where possible.
