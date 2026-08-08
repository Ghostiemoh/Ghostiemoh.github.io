## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-14 - Keyboard Accessibility in Hover-Revealed Containers
**Learning:** In Tailwind-based design systems, wrapping interactive elements in `group-hover:opacity-100` containers completely hides them from keyboard users who cannot trigger the hover state.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the parent container, and add explicit `focus-visible` ring indicators to the interactive child elements to ensure full keyboard operability.
