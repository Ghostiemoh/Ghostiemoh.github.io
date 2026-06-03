## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Add ARIA Labels to External Links and Form Fields
**Learning:** External link icons (like GitHub and generic external links) and form inputs in `SecureDirective.jsx` lacked explicit screen reader and keyboard accessibility support.
**Action:** Always include both an `aria-label` attribute for screen readers and a `title` attribute for helpful tooltips on icon-only links. For accessible forms, explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input/textarea.
