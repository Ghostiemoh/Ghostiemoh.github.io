## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-05-18 - Hover-only UI Patterns
**Learning:** Tailwind `group-hover:opacity-100` patterns completely hide interactive elements from keyboard-only users unless paired with `focus-within:opacity-100`. Additionally, icon-only buttons revealed in these groups often lack context for screen readers.
**Action:** Always pair `group-hover` visibility classes with `focus-within` equivalents on the container, and add `focus-visible:ring` and descriptive `aria-label`s to the interactive elements themselves.
