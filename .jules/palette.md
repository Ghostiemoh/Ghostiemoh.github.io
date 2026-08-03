## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-08-03 - Ensure Keyboard Access to Hover-Revealed UI
**Learning:** In Tailwind-styled UI where actions are visually revealed on group hover (e.g., `group-hover:opacity-100`), keyboard users cannot access or see these actions unless focus states are explicitly handled.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the container, and add explicit `focus-visible:ring-2` to the interactive children.
