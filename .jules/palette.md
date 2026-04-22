## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-22 - Form Input Accessibility
**Learning:** React form inputs without explicitly linked `<label>`s via `htmlFor` fail screen reader context because the visual labels are just disconnected text elements.
**Action:** Always link `<label htmlFor="xyz">` to an input, select, or textarea with `<input id="xyz" />` so screen readers announce the form label when the input receives focus.

## 2026-04-22 - Filter Group Semantic Roles
**Learning:** A row of custom filter buttons in React state (like in `ProjectGrid.jsx`) lacks context indicating they behave as a mutually exclusive toggle group.
**Action:** Wrap filter button groups in `role="group"` with an `aria-label`, and explicitly add `aria-pressed={activeState === item}` to individual buttons so screen readers read out the "pressed" state dynamically.
