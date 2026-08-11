## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-08-11 - Proper Form Label Bindings
**Learning:** In React components like `SecureDirective.jsx`, styling text to look like a label without an actual `htmlFor`-`id` binding fails to expose the input's purpose to assistive technologies.
**Action:** Always link custom-styled labels with their inputs using `htmlFor` and `id` pairs.
