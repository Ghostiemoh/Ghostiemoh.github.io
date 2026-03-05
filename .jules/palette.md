# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Keyboard Focus on Visually Hidden Interactive Elements
**Learning:** Using CSS `opacity: 0` or simply moving an element off-screen to hide an interactive component (like a Back to Top button) leaves it in the keyboard focus order and accessibility tree.
**Action:** Always combine visually hiding styles with `visibility: hidden` (e.g., Tailwind's `invisible` class) or `display: none` to properly remove interactive elements from the keyboard tab order and screen readers when they aren't supposed to be reachable.
