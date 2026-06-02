## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-06-02 - Form Label Associations
**Learning:** The contact form in SecureDirective lacked explicit association between labels and inputs, degrading screen reader accessibility.
**Action:** Always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea.
