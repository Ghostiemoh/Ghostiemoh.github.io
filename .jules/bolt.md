## 2026-03-15 - Optimize Above-the-Fold Image Loading
**Learning:** Found an above-the-fold image (`profile.JPG`) using `loading="lazy"`. This delays the Largest Contentful Paint (LCP) and degrades perceived performance.
**Action:** Replaced `loading="lazy"` with `fetchpriority="high"` for the critical image, improving LCP and early resource loading. This is a common pattern to check for in other codebases.
