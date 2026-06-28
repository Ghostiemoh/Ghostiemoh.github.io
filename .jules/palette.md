## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Make hover-revealed actions accessible via keyboard
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` are inaccessible to keyboard users because they cannot hover. Furthermore, these elements lacked `aria-label`s inside mapped arrays.
**Action:** Always pair `group-hover` reveal classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the container, and use dynamic item-specific context for `aria-label`s on icon-only buttons.
