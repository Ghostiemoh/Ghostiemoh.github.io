## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-19 - Adding State and Context to ProjectGrid Elements
**Learning:** Filter buttons functioning like tabs lacked state indication, and icon-only project links lacked contextual labels, degrading the screen reader experience.
**Action:** Always apply `aria-pressed` to toggle/filter buttons to reflect their active state, and use dynamically interpolated strings (e.g., ``aria-label={`View ${item.title}`}``) for icon-only action links in iterated lists to provide unique context.
