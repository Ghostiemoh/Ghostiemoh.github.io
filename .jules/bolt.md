## 2025-03-25 - LCP Optimization on Hero Image
**Learning:** `profile.JPG` in `index.html` was loaded with `loading="lazy"`. Lazy loading above-the-fold images delays Largest Contentful Paint (LCP).
**Action:** Replace `loading="lazy"` with `fetchpriority="high"` for hero images to accelerate LCP.
