## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-18 - Hover-Revealed Interactive Elements
**Learning:** In this application's card patterns, hidden action containers using group-hover:opacity-100 are completely inaccessible to keyboard users because they lack focus-within:opacity-100. Additionally, the nested icon-only buttons lacked explicit aria-label attributes, making them opaque to screen readers.
**Action:** When implementing hover-revealed action areas, always pair hover classes with focus-within equivalents, add clear focus indicators like focus-visible:ring-2 to the interactive children, and provide semantic aria-label attributes to icon-only controls.
