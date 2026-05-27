## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-27 - Add explicit label-to-input association in SecureDirective.jsx
**Learning:** The forms in the application, such as the contact form in `SecureDirective.jsx`, lacked explicit `htmlFor`/`id` associations between `<label>` elements and their corresponding input fields.
**Action:** Always verify that every `<label>` tag has an `htmlFor` attribute that exactly matches the `id` of its corresponding form control (`<input>`, `<textarea>`, etc.) to ensure screen readers can announce the input purpose correctly and users can click the label to focus the input.
