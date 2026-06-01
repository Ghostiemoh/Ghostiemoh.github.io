## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-06-01 - Add explicit htmlFor labels to inputs
**Learning:** In React form components (like `SecureDirective.jsx`), labels without `htmlFor` attributes fail to associate with inputs, hindering screen reader accessibility. Explicitly linking them using `htmlFor` and `id` ensures robust keyboard and screen reader support.
**Action:** Always associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea.
