## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-06-29 - Keyboard Accessibility for Hover Actions
**Learning:** Keyboard users cannot access hover-revealed actions (like project links or view buttons) without `focus-within` on the container and `focus-visible` styles on the interactive elements.
**Action:** Whenever using `group-hover:opacity-100`, ensure it is paired with `focus-within:opacity-100`, and add `focus-visible:ring-2` for clear focus indicators on the child elements.
