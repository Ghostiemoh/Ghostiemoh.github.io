## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-11-20 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** When using hover-revealed utility classes in Tailwind (e.g., `group-hover:opacity-100`), they remain completely inaccessible to keyboard users because hover states don't trigger on focus.
**Action:** Always pair hover-revealed classes with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the container, and ensure the interactive children have proper `focus-visible` indicators and `aria-label`s if they are icon-only.
