## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-07-21 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** Containers using `group-hover:opacity-100` hide their interactive children (like action links or buttons) from keyboard users.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`, `focus-within:translate-y-0`) on the container. Add `focus-visible` styles (`focus-visible:ring-2 focus-visible:outline-none`) and descriptive `aria-label`s to the interactive elements themselves to ensure clear navigation and screen reader support.
