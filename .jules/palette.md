## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-05-04 - Accessible Filter and Tab States
**Learning:** Filter buttons and custom tab-like toggles (such as those in `ProjectGrid.jsx` and `NexusToggle.jsx`) were relying only on visual styling for their active state, leaving screen readers without context.
**Action:** When creating custom tab controls or category filters, always wrap them in a container with `role="group"` and a descriptive `aria-label`, and use `aria-pressed={isActive}` on the individual buttons to reflect their current state.
