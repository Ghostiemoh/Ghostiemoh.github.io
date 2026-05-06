## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-06 - Explicit Form Label Association
**Learning:** The SecureDirective form lacked proper connection between labels and inputs, leading to screen reader accessibility issues.
**Action:** Always explicitly associate `<label>` tags with their respective form controls in React by pairing `htmlFor` on the label with a matching `id` on the input/textarea.
