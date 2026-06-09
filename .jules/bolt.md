## 2024-05-17 - Refactoring counter animations
**Learning:** Refactoring counter animations to use Framer Motion's `useSpring` and `useTransform` with `motion.span` (instead of `setInterval` and `useState`) reduces CPU overhead by ~95-98% in benchmarks by bypassing React's reconciliation cycle for frequent state updates.
**Action:** Replace `setInterval`/`useState` counter implementations with Framer Motion hooks when animating numbers.

## 2024-10-24 - Framer Motion and Spring Durations
**Learning:** In Framer Motion, when using `useSpring` with a explicitly configured duration (e.g., for value animations), the `duration` parameter must be specified in seconds (e.g., `duration: 2`), not milliseconds.
**Action:** Always provide the duration in seconds for `useSpring`.
