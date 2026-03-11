# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Custom Progress Bar Accessibility
**Learning:** Custom progress bars built using `div` elements are entirely inaccessible to screen readers without explicit ARIA roles. The percentage text alone inside the container isn't sufficient to convey the component's state or purpose programmatically.
**Action:** Always add `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and an accessible name (`aria-label` or `aria-labelledby`) to any `div`-based custom progress bar implementation.
