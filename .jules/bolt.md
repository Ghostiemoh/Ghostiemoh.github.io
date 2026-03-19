## 2024-03-19 - Profile Image Fetch Priority
**Learning:** `loading="lazy"` on above-the-fold images like `profile.JPG` in `index.html` significantly delays Largest Contentful Paint (LCP) because it prevents the browser from loading the image early.
**Action:** Replaced `loading="lazy"` with `fetchpriority="high"` for the LCP image. Benchmark showed LCP decreased from 2456ms to 456ms.
