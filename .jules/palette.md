# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.
## 2024-05-24 - Accessible Skill Bars
**Learning:** Decorative div-based animated progress bars triggered by `IntersectionObserver` lacked semantic meaning, making them invisible to screen readers despite visually conveying important metrics (skill levels).
**Action:** When implementing custom CSS/JS progress bars, always include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-label` to ensure the information is accessible. Replaced inline `style="width: 0"` with Tailwind `w-0` for cleaner markup while maintaining the initial state required for JS animation.
