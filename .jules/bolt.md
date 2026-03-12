## 2024-05-24 - Above-the-fold LCP Image Optimization
**Learning:** The profile image (`profile.JPG`) in `index.html` was using `loading="lazy"`. This delays the Largest Contentful Paint (LCP) because the browser waits until layout is complete before fetching the image.
**Action:** Replaced `loading="lazy"` with `fetchpriority="high"` to ensure the browser prioritizes fetching this critical above-the-fold asset immediately.
