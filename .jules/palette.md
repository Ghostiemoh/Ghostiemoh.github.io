## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-05-02 - Form Label Association and Custom Filter Button States
**Learning:** React form elements and custom filter buttons lacked crucial screen reader associations and state announcements. Screen readers cannot infer the purpose of an input without a programmatic link, and custom UI components (like mapped filter buttons) don't announce their active state by default.
**Action:** Always explicitly associate `<label>` tags with their respective form controls using `htmlFor` matching the input's `id`. For custom tab-like filter buttons, group them with `role="group"` and an `aria-label`, and apply `aria-pressed` dynamically to reflect the selected state.
