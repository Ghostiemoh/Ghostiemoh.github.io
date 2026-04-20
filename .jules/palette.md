## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-20 - Accessible Filter Buttons State
**Learning:** Filter buttons that control the view state of a collection (e.g. `ProjectGrid.jsx` categories) need to communicate their active/inactive status to screen readers, as visual color changes alone are not accessible.
**Action:** Always add `aria-pressed={isActive}` to toggle/filter buttons and wrap the container with `role="group"` and an `aria-label` to provide context.
