## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-04-30 - Improve Accessibility of Filter Button Groups
**Learning:** Filter button groups, such as category selectors, need contextual semantic grouping for screen readers to properly announce them, as well as distinct toggle states to denote what's active.
**Action:** Always add `role="group"` and `aria-label` to the wrapper containing filter buttons, and apply `aria-pressed={state === current}` to the individual buttons to accurately reflect the active filter state.
