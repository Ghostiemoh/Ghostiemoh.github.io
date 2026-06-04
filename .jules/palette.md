## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Associate Form Labels in React
**Learning:** Custom forms lacked explicit associations between `<label>` and their corresponding inputs/textareas, breaking screen reader context for form fields.
**Action:** Always explicitly associate `<label>` tags with form controls by matching the `htmlFor` attribute on the label with the `id` attribute on the input.
