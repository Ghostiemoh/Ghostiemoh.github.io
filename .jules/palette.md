## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-15 - Interactive Overlay Keyboard Access
**Learning:** Tailwind classes like `group-hover:opacity-100` hide interactive elements from sighted keyboard users. Action controls (like external links and view buttons on project cards) require pairing hover styles with `focus-within:opacity-100` and individual `focus-visible` indicators to be accessible.
**Action:** Always combine `group-hover:*` utility classes with `focus-within:*` on the parent container and add explicit `focus-visible` styles on child interactive elements.
