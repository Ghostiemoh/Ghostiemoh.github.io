# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Disabled State Feedback and Dynamic Message Accessibility
**Learning:** The contact form lacked clear visual feedback when submitting, and dynamic success/error messages were not properly announced by screen readers.
**Action:** Always add visual indicators like `disabled:opacity-75 disabled:cursor-not-allowed` to disabled async buttons, and ensure dynamic message containers use `aria-live="polite"` so screen readers can automatically announce updates.
