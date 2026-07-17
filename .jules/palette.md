## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-17 - Keyboard Accessible Hover Actions
**Learning:** Hover-revealed action buttons (e.g., `group-hover:opacity-100`) in cards hide interactive elements from keyboard users, making the app inaccessible without a mouse.
**Action:** Pair `group-hover` with `focus-within` on containers, and add `focus-visible:ring-2 focus-visible:outline-none` to the interactive children to ensure keyboard accessibility.
