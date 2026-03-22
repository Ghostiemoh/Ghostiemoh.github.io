
## 2026-03-22 - Above-the-fold Image Loading Priority
**Learning:** Using `loading="lazy"` on above-the-fold images like `profile.JPG` significantly delays the Largest Contentful Paint (LCP) because the browser waits until the image is about to be scrolled into view before fetching it, even if it's already visible.
**Action:** Replace `loading="lazy"` with `fetchpriority="high"` for critical above-the-fold images to instruct the browser to prioritize fetching them, improving LCP performance.
