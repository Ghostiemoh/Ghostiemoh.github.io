## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-24 - Ensure keyboard access for hover-revealed elements
**Learning:** In Tailwind, components often use `group-hover:opacity-100` to hide and reveal actions (like icon buttons) on mouse hover. This breaks accessibility because keyboard users tabbing through elements won't see them appear when they gain focus.
**Action:** Always pair hover-reveal classes with focus-within (e.g., `focus-within:opacity-100`) on the parent container, and add `focus-visible:ring-2` to the interactive children.
