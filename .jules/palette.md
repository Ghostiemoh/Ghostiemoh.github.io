## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Explicit Form Label Associations
**Learning:** The contact form inputs in SecureDirective.jsx lacked proper associations with their labels, reducing accessibility for screen reader users.
**Action:** Always verify that <label> elements use the htmlFor attribute and correspond to the matching id on the respective <input> or <textarea> to ensure accessibility compliance and increase focus area.
