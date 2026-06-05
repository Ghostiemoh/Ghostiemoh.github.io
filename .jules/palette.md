## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Add Form Labels and ARIA Labels in SecureDirective.jsx
**Learning:** Form labels were not explicitly associated with their input fields, and the icon-only GitHub link lacked screen reader context in the existing `SecureDirective.jsx` design.
**Action:** Always ensure `<label>` elements are associated with form controls using `htmlFor` and `id`, and verify that icon-only links include an `aria-label` and `title`.
