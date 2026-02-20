## 2025-02-20 - Unused Third-Party Scripts in Static Templates
**Learning:** Static website templates often come with pre-included third-party scripts (like Google Recaptcha, Analytics, etc.) that are not actually used by the implementation. These scripts can be heavy (~500KB parsed for Recaptcha) and block the main thread, significantly impacting performance.
**Action:** Always audit `index.html` and other entry points for `<script>` tags that are not referenced in the application logic. verifying their usage before removal is critical.
