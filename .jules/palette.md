## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-07-23 - Interactive Element Containers
**Learning:** Tailwind UI patterns using hover-revealed classes (e.g., `group-hover:opacity-100`) hide content from keyboard navigation unless paired with focus equivalents.
**Action:** Always pair hover-revealed classes with `focus-within` equivalents (e.g., `focus-within:opacity-100`) and ensure interactive child elements have clear `focus-visible:ring-2` focus indicators.
