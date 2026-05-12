## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Form Accessibility and Tooltips in SecureDirective.jsx
**Learning:** The contact form lacked explicit `htmlFor` and `id` bindings between labels and inputs, which degrades screen reader experience and reduces the clickable area for users. Additionally, icon-only links lacked hover tooltips for mouse users.
**Action:** Always ensure that every `<label>` has an `htmlFor` attribute that exactly matches the `id` of its corresponding form control. For icon-only links, add both an `aria-label` for screen readers and a `title` attribute for mouse hover tooltips.
