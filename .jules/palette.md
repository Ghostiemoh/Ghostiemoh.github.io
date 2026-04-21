## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-21 - Accessible Filter Groups and Icon Actions
**Learning:** Filter buttons and project card hover actions lacked necessary context for screen readers. Buttons functioning as filters needed an `aria-pressed` state to convey active selection, while icon-only links lacked `aria-label`s.
**Action:** Always wrap filter buttons in a `role="group"` with an `aria-label`, apply `aria-pressed` dynamically to reflect state, and ensure all icon-only interactive elements have descriptive `aria-label`s.
