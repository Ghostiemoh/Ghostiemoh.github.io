## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-23 - Form Accessibility Learnings
**Learning:** In the `SecureDirective.jsx` component, form inputs lacked explicit `id` and `htmlFor` bindings, and icon-only links lacked `aria-label` and `title` attributes, severely impacting screen reader usability and keyboard navigation context.
**Action:** Always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea. For icon-only links, always include both an `aria-label` attribute for screen reader accessibility and a `title` attribute to provide a helpful hover tooltip.
