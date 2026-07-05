## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** Container components using `group-hover:opacity-100` hide interactive elements from keyboard users unless paired with `focus-within`.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` (and equivalent transform classes) and add `focus-visible:ring-2` to interactive child elements.
