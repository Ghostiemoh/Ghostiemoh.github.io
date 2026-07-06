## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-20 - Add Accessible Hover Reveal Pattern in BentoHub.jsx
**Learning:** Icon-only action buttons within cards in `BentoHub.jsx` were hidden using `opacity-0` but lacked `focus-within:opacity-100` on their container, making them invisible to keyboard navigators when focused. They also lacked `aria-label` context for screen readers and visible focus indicators.
**Action:** When implementing hover-revealed action containers, always pair `group-hover:opacity-100` with `focus-within:opacity-100`. Ensure all child icon-only interactive elements receive descriptive `aria-label`s and clear `focus-visible:ring-2` focus indicators.
