## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-07 - Keyboard Accessibility for Hover-Revealed UI
**Learning:** Tailwind group-hover patterns inadvertently hide interactive elements from keyboard users.
**Action:** Ensure group-hover classes (like group-hover:opacity-100) on containers are explicitly paired with focus-within equivalents (focus-within:opacity-100), and all icon-only internal links/buttons are annotated with aria-label and visual focus-visible rings.
