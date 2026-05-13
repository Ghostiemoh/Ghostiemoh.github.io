## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-15 - Form Label Associations and Link Context
**Learning:** Custom forms and icon-only links lacked proper semantic connections (`htmlFor`/`id` pairing) and screen reader context (`aria-label` and `title`), degrading the accessibility for assistive technologies.
**Action:** Always explicitly associate `<label>` tags with form controls using `htmlFor` and `id` attributes. When adding icon-only links, ensure an `aria-label` is provided for screen readers and a `title` attribute for mouse users.
