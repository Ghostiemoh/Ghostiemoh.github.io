## 2025-02-18 - LCP Anti-pattern in Hero Images
**Learning:** The hero image (`profile.JPG`) was explicitly set to `loading="lazy"`, which is a performance anti-pattern for LCP elements as it delays the load until layout is computed.
**Action:** Always audit `<img>` tags above the fold. Remove `loading="lazy"` and add `fetchpriority="high"` for the primary LCP candidate to ensure early discovery by the browser's preload scanner.
