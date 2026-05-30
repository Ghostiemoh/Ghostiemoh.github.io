## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-02-20 - Forms need explicit label associations
**Learning:** Forms in SecureDirective.jsx were missing explicit id and htmlFor pairings, which is critical for screen reader users to understand what input they are filling.
**Action:** Always explicitly associate <label> tags with their respective form controls by pairing the htmlFor attribute on the label with a matching id attribute on the input or textarea.
