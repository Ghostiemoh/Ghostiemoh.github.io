## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-05-07 - Form Label Association Pattern in React
**Learning:** Found an accessibility issue pattern specific to this app's components where `<label>` tags lacked `htmlFor` attributes matching the `id` of their respective form inputs, meaning screen readers could not associate them correctly.
**Action:** When implementing forms in this design system, explicitly associate `<label>` tags with form controls using `htmlFor` and `id` pairs to ensure proper screen reader context and focus behavior.
