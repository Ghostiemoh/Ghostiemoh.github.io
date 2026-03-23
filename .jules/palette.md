# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Dynamic Form Messages Accessibility
**Learning:** The contact form injects success or error messages dynamically into a container without notifying screen readers.
**Action:** Always utilize the `aria-live="polite"` attribute on dynamic message containers in forms to ensure screen readers automatically announce updates without interrupting the user.
