## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-06-06 - Missing ARIA Labels on Icon-only Links
**Learning:** Discovered a pattern where icon-only links across different components lack `aria-label` attributes, relying on `title` attributes alone, which are often insufficient for screen reader users.
**Action:** Added `aria-label` attributes to these links to ensure full accessibility for screen reader users.
