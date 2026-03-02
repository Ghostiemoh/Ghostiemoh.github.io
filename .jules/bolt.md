## 2026-03-02 - Code deletion is not an optimization
**Learning:** Removing functional code (like reCAPTCHA or IntersectionObservers) to improve load time is considered a functional regression and breaks the app, even if the elements appear unused at first glance.
**Action:** Never delete third-party scripts or functional JavaScript blocks without absolute certainty they are deprecated. Only apply safe frontend optimizations like modifying native HTML attributes (e.g., `fetchpriority="high"`).
