## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-24 - Associate form labels with inputs in SecureDirective.jsx
**Learning:** Form labels lacked explicit `htmlFor` attributes matching input `id` attributes, which impairs screen reader accessibility and reduces the clickable area for users.
**Action:** Always explicitly associate `<label>` tags with their respective form controls (e.g., `<input>`, `<select>`, `<textarea>`) by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input.
