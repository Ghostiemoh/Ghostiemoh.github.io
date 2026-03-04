## 2024-05-18 - Avoid lazy-loading above-the-fold images
**Learning:** Found an above-the-fold profile image using `loading="lazy"`. This delays the Largest Contentful Paint (LCP) as the browser waits until layout is mostly done before fetching it. In static HTML sites like this, the first image is critical for perceived speed.
**Action:** Remove `loading="lazy"` and add `fetchpriority="high"` for any critical above-the-fold image to hint the browser to load it ASAP.
