## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Add focus-within for hover-revealed elements
**Learning:** Container elements that use hover-revealed classes (e.g., `group-hover:opacity-100`) hide interactive elements from keyboard users because focus states inside the container do not trigger the hover class.
**Action:** Always pair `group-hover` utility classes that reveal interactive elements with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) and ensure visible focus indicators on the child elements.
