## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-05-19 - Add Label Associations for SecureDirective Form
**Learning:** Forms in complex components (like SecureDirective) were lacking proper associations between labels and their corresponding input fields, reducing accessibility for screen readers and missing click target area improvements for users.
**Action:** When building accessible React forms, always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea.
