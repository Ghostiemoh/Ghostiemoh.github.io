## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-05-23 - Keyboard Focus Parity on Tailwind Groups
**Learning:** In Tailwind, components relying on `group-hover:opacity-100` to reveal interactive elements (like icon buttons inside cards) are completely inaccessible via keyboard navigation because focus does not trigger the hover state, hiding the currently focused element.
**Action:** Always pair `group-hover:*` with `group-focus-within:*` for revealed elements, and explicitly add `focus-visible:ring-2` to the interactive children to ensure screen reader users and keyboard navigators can see where they are on the page.
