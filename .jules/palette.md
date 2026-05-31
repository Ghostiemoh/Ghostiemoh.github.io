## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Add Form Labels and Accessible Icon Links
**Learning:** Missing explicit `htmlFor` on labels and missing `title` tooltips on icon-only links reduces screen reader and general user accessibility.
**Action:** Always associate labels explicitly via `id` and `htmlFor`, and ensure icon-only links contain both `aria-label` and `title`.
