## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-18 - Associate Labels with Form Inputs in SecureDirective.jsx
**Learning:** Custom styled form labels were missing `htmlFor` attributes, and corresponding inputs lacked `id` attributes, resulting in unassociated form controls for screen readers.
**Action:** Always ensure that `<label>` elements explicitly use `htmlFor` to reference the exact `id` of their target `<input>` or `<textarea>`, regardless of visual layout.
