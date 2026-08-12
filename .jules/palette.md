## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-08-12 - Interactive Elements in Hover Containers
**Learning:** Interactive child elements (like links or buttons) that only appear when their parent container is hovered remain invisible and inaccessible to keyboard users because they cannot trigger the hover state.
**Action:** Always pair `group-hover` visibility classes (e.g., `group-hover:opacity-100`) with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the parent container, and add clear focus indicators (e.g., `focus-visible:ring-2`) to the interactive child elements to ensure keyboard accessibility.
