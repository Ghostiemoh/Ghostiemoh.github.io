## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-07-24 - Focus States for Hover-Revealed Actions
**Learning:** Found a pattern where interactive elements within `.group-hover:opacity-100` containers were inaccessible via keyboard because they lacked a `.focus-within:opacity-100` equivalent.
**Action:** When adding hover-revealed containers, always pair `group-hover:*` visibility classes with `focus-within:*` and add `focus-visible:ring-2` to the interactive children to ensure keyboard users can access the hidden actions.
