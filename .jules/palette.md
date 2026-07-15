## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-03-22 - Keyboard Accessible Hover Actions
**Learning:** Container elements using `group-hover:opacity-100` hide interactive children from keyboard users because the hover state is never triggered via Tab navigation.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`), and ensure all interactive child elements have clear focus indicators (e.g., `focus-visible:ring-2`) and aria-labels if they are icon-only.
