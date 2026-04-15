## 2024-05-24 - Static Data in Render Functions
**Learning:** React components in this project often define static data arrays and compute derived state (like categories using `new Set()`) inside the render function. This causes unnecessary O(N) reallocation and recalculation on every state change (e.g., when toggling categories).
**Action:** Move static data arrays and static derived calculations outside the component, and use `useMemo` for dynamic derived state to prevent performance degradation on re-renders.
