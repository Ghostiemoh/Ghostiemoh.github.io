# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2026-03-02 - Accessible Custom Progress Bars
**Learning:** Custom progress bars implemented using `div` elements (like the `.skill-bar` classes in `index.html`) are completely invisible to screen readers without specific ARIA roles and attributes.
**Action:** Always include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-labelledby` or `aria-label` when creating custom progress bars with `div` elements.
