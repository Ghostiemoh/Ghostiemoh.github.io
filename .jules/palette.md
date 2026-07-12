## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-02-28 - Hover-Revealed Card Actions
**Learning:** The project grid cards use `group-hover:opacity-100` to reveal interactive icon-only links, which completely hides these actions from keyboard-only users who cannot trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` on the container, and add `aria-label` with `focus-visible:ring-2` to the interactive elements themselves.
