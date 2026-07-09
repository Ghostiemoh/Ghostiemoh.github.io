## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-17 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** Actions hidden behind hover states (like `group-hover:opacity-100`) are inaccessible to keyboard users unless paired with equivalent focus states.
**Action:** Always pair `group-hover` visibility classes with `group-focus-within` equivalents, and add explicit `aria-label`s and `focus-visible` styles to the interactive child elements to ensure full keyboard navigation support.
