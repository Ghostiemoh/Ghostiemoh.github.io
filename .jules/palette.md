## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Add ARIA Labels and State to Filter Groups
**Learning:** Filter buttons and grid actions in `ProjectGrid.jsx` lacked grouping context, active state feedback, and screen reader labels for icon-only links.
**Action:** When implementing filter buttons or tab-like elements, apply the `aria-pressed` attribute dynamically to reflect their active state, wrap their container with `role="group"` and an `aria-label`, and ensure mapped icon-only links use dynamic `aria-label`s based on their content.
