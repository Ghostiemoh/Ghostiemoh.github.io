## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-25 - Keyboard accessibility for hover-revealed containers
**Learning:** When interactive elements (like icon buttons) are placed inside a container that only becomes visible on hover (e.g., using `opacity-0 group-hover:opacity-100`), keyboard users are unable to see the elements when navigating with the Tab key.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` on the container to reveal it when nested elements receive focus, and ensure the interactive elements have explicit focus indicators (e.g., `focus-visible:ring-2`) and ARIA labels.
