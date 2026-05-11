## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-11 - Add explicit label associations to SecureDirective form
**Learning:** Form labels in `SecureDirective.jsx` lacked explicit association with their respective controls, causing screen readers to lose context during form navigation.
**Action:** When modifying or creating form elements in React, always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input.
