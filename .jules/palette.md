## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-20 - Keyboard Accessibility for Hover-Revealed UI
**Learning:** In Tailwind UI patterns, interactive elements that are only revealed on hover (e.g., `group-hover:opacity-100`) are completely hidden from keyboard-only users who navigate via Tab.
**Action:** Always pair `group-hover:*` visibility classes with `focus-within:*` equivalents on the container, and add explicit `focus-visible:ring-2` styles and `aria-label`s to the interactive child elements to ensure clear focus indicators and screen reader support.
