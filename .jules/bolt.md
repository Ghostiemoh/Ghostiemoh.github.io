
## 2025-06-25 - Prioritize Above-The-Fold Images
**Learning:** Adding `loading="lazy"` to critical above-the-fold images (like `profile.JPG` in `index.html`) delays Largest Contentful Paint (LCP) measurement.
**Action:** Remove `loading="lazy"` and add `fetchpriority="high"` for such images to ensure the browser prioritizes them for improved LCP.
