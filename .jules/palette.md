## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-06-09 - Accessible Icon-Only Interactions
**Learning:** Icon-only links and buttons frequently suffer from missing accessible names, leading to a poor experience for screen reader users and users requiring tooltips. Adding both aria-label and title attributes is essential.
**Action:** Ensure all icon-only interactive elements in React components are always equipped with both aria-label for assistive technologies and title for hover tooltips.
