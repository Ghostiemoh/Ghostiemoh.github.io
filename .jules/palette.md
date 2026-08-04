## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-08-04 - Keyboard Accessibility for Hover Actions
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` create invisible tab stops for keyboard users unless explicitly handled.
**Action:** Always pair `group-hover` reveals with `focus-within` equivalents on the container, and provide clear `focus-visible` indicators and `aria-label`s for the interactive child elements.
