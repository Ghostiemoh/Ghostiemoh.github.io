## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-24 - Explicit Form Labels
**Learning:** The SecureDirective form lacked explicit associations between `<label>` elements and their corresponding input/textarea elements, affecting screen reader form navigation.
**Action:** Always associate `<label>` elements with form controls using matching `htmlFor` and `id` attributes to ensure robust accessibility.
