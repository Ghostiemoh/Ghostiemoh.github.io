## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-05-16 - Add explicit label associations to Secure Directive form
**Learning:** Form inputs and textareas lacked explicit `<label>` associations in `SecureDirective.jsx`, causing accessibility issues where screen readers could not properly announce the form fields and leaving users without context. This also affected standard usability where clicking the label text did not immediately focus the input.
**Action:** When building accessible React forms, always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea.
