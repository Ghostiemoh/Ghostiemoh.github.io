## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-24 - Project Card Hover Actions Accessibility
**Learning:** The project cards used `group-hover:opacity-100` to reveal action links (GitHub, live project), making them invisible to keyboard users who tab through the interface.
**Action:** When using hover-revealed classes, always pair them with their `focus-within` equivalents (e.g., `focus-within:opacity-100 focus-within:translate-y-0`) and ensure the interactive elements inside have clear focus indicators (`focus-visible:ring-2`) and `aria-label`s.
