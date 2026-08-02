## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-03-24 - Interactive Element Accessibility
**Learning:** Found multiple instances where hover-only reveal patterns (`group-hover:opacity-100`) were used for action buttons (like View, External Link, Download) without their `focus-within` or `group-focus-within` counterparts, making them inaccessible via keyboard navigation. Additionally, icon-only action buttons missed proper `aria-label` attributes.
**Action:** When working with hover-revealed action areas in Tailwind, always pair `group-hover:opacity-100` with `focus-within:opacity-100` or `group-focus-within:opacity-100` so keyboard users can discover hidden actions. Ensure all icon-only buttons include an `aria-label` attribute (or use `sr-only` text if preferred) to provide screen readers with context. Also add focus rings (e.g. `focus-visible:ring-2 focus-visible:ring-secondary`) to make the focused element visually distinct.
