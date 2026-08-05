## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-17 - Keyboard Accessibility for Hover-Revealed Actions
**Learning:** Interactive elements hidden behind `group-hover:opacity-100` are inaccessible to keyboard users because tabbing into them doesn't trigger the hover state, leaving them invisible.
**Action:** Always pair hover-revealed classes with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the container, and add explicit focus indicators (e.g., `focus-visible:ring-2`) and `aria-label`s to the interactive child elements.
