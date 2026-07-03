## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-18 - Keyboard accessibility on hover-revealed containers
**Learning:** Interactive elements hidden behind `opacity-0` that appear on `group-hover` are inaccessible to keyboard users unless the container also reveals them on `focus-within`.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` on containers of interactive elements, and add `focus-visible:ring-2` to the interactive elements themselves.
