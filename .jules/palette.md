## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Missing Accordion ARIA States
**Learning:** Accordion or expanding elements (like FAQ toggles) often lack `aria-expanded` attributes, making their state opaque to screen reader users.
**Action:** When implementing or updating accordion-style elements, ensure they include an `aria-expanded` attribute that is dynamically toggled via JavaScript to accurately reflect the content's visibility state.
