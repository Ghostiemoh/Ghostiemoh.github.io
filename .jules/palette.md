## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-24 - Icon-Only Links Accessibility
**Learning:** Found multiple instances where icon-only links lacked `aria-label` or `title` attributes across various components, hindering screen reader usability and providing no hover tooltip context.
**Action:** Always ensure that any anchor tag (`<a>`) containing only an icon (`<Icon />`) has explicitly defined `aria-label` for screen reader context and `title` for hover tooltips.
