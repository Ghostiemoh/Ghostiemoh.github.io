## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-18 - Form Accessibility Labels
**Learning:** Found form fields (inputs, selects, textareas) in `SecureDirective.jsx` that had visible `<label>` elements, but lacked the `htmlFor` and `id` attributes required for screen reader association.
**Action:** Always ensure that every form control explicitly pairs with its label using matching `htmlFor` and `id` attributes to guarantee semantic structure and accessibility for screen reader users.
