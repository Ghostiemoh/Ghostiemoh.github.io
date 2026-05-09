## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Add ARIA states to filter and toggle buttons
**Learning:** Filter buttons and custom tab-like toggles lacked screen reader context for their active states and groupings.
**Action:** Always wrap filter/toggle groups in a container with `role="group"` and an `aria-label`, and use `aria-pressed` on the buttons to indicate their active state dynamically.
