## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-04-29 - Accessible Filter Groups
**Learning:** Groups of filter buttons or tabs often lack proper semantic structure and state indication, making it difficult for screen reader users to understand their purpose or which option is currently active.
**Action:** When implementing filter buttons or tab-like elements, always apply the `aria-pressed` attribute dynamically to reflect their active state, and wrap their container with `role="group"` and an `aria-label` to provide proper context.
