## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Add Explicit Form Labels in SecureDirective.jsx
**Learning:** Custom styled React forms often omit standard accessibility associations, relying solely on visual proximity of labels to inputs. This causes screen readers to announce inputs without their semantic context.
**Action:** When building accessible React forms, always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input or textarea.
