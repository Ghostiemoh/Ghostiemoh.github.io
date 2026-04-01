## 2024-04-01 - Preventing Render-Blocking in Single Page Infographics
**Learning:** Found that external CDNs used by static infographics (e.g., chart.js) cause significant delays to the critical rendering path due to render-blocking scripts.
**Action:** Applied `defer` to external script tags and wrapped inline execution logic in `DOMContentLoaded`. In the future, applying defer to external scripts paired with `DOMContentLoaded` event listeners on inline scripts using those libraries should be standard practice to improve FCP & LCP.
