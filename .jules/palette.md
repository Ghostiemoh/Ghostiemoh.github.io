## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-10-18 - Keyboard accessibility for hover-revealed containers
**Learning:** Containers that reveal interactive child elements solely using `group-hover` (e.g., `group-hover:opacity-100`) hide those elements from keyboard users because focus does not trigger the hover state.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` on the container, and add clear focus indicators like `focus-visible:ring-2` to the interactive children to ensure they are visible and accessible via keyboard navigation.
