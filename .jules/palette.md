## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-20 - Explicit Form Label Association
**Learning:** Form labels in the SecureDirective component lacked explicit association (`htmlFor` to `id`) with their respective input fields, leading to reduced accessibility for screen reader users.
**Action:** Always ensure that form elements (inputs, textareas) have an `id` that exactly matches the `htmlFor` attribute of their corresponding `<label>` tag.
