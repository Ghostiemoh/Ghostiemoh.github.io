
## 2025-02-28 - [LCP Image Optimization]
**Learning:** Above-the-fold images like `profile.JPG` in `index.html` were using `loading="lazy"`. This is a performance anti-pattern because it delays the download of the Largest Contentful Paint (LCP) element until the browser has calculated the layout, slowing down perceived load times.
**Action:** Removed `loading="lazy"` and added `fetchpriority="high"` to ensure the browser prioritizes downloading critical above-the-fold assets immediately.
