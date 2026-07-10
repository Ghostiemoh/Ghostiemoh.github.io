## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-10 - Keyboard Accessible Hover Actions
**Learning:** Interactive items hidden via `group-hover:opacity-0` render themselves inaccessible to keyboard users because they cannot be focused when invisible, or the user won't know they have focus.
**Action:** Whenever using `group-hover` to reveal interactive elements, always pair it with the `focus-within` variant on the container, and add clear `focus-visible` indicators to the items.
