## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-08-06 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** Hidden action buttons revealed only on hover (`group-hover:opacity-100`) are inaccessible to keyboard navigation because users cannot see them when tabbing through the page.
**Action:** Always pair hover-revealed classes with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) and add explicit focus indicators (e.g., `focus-visible:ring-2`) to interactive child elements.
