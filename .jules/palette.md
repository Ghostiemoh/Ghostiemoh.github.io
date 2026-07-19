## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-10-24 - Keyboard Accessibility for Hover-Revealed UI
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` are inaccessible to keyboard users because tabbing to them does not trigger the hover state, keeping them invisible.
**Action:** Always pair `group-hover` visibility classes (like `group-hover:opacity-100`) with their `focus-within` equivalents (`focus-within:opacity-100`) on the container, and add clear `focus-visible` indicators to the interactive children.
