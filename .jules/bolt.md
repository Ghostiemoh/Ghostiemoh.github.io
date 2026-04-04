## 2026-04-04 - Render-Blocking FontAwesome Stylesheets
**Learning:** External FontAwesome stylesheets without `preload` significantly delayed FCP and LCP as they act as render-blocking resources.
**Action:** Always use the `<link rel="preload" as="style" onload="...">` pattern for external non-critical stylesheets like FontAwesome to avoid blocking initial rendering. Do not defer Tailwind Play CDN as it causes critical visual regressions.
