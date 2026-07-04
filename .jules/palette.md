## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-07-04 - Ensure hover-revealed containers are keyboard accessible
**Learning:** Interactive elements nested inside containers hidden with `opacity-0` and revealed via `group-hover:opacity-100` are inaccessible to keyboard navigation because focusing them doesn't reveal their container.
**Action:** Always pair `group-hover:opacity-100` on containers with `focus-within:opacity-100`, and explicitly add `focus-visible:ring-2` focus indicators to the nested interactive elements.
