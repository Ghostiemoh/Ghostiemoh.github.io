## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-18 - Keyboard Access for Hover Revealed Components
**Learning:** Container components using hover-revealed classes (e.g., `group-hover:opacity-100`) implicitly break keyboard accessibility because the child links/buttons remain invisible and untabbable to keyboard users.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`) and ensure the interactive children have proper `focus-visible:ring-2` styles and `aria-label`s.
