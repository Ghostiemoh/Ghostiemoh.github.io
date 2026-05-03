## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-03 - Form Associations and Icon Button Labels
**Learning:** React form inputs (like in `SecureDirective.jsx`) lacked programmatic association with their labels, reducing screen reader effectiveness and click areas. Additionally, mapped and standalone icon-only links (like GitHub/External links in `ProjectGrid.jsx` and `SecureDirective.jsx`) lacked `aria-label`s, providing no context to assistive technologies.
**Action:** Always explicitly associate `<label>` tags with their respective form controls by pairing the `htmlFor` attribute on the label with a matching `id` attribute on the input. Always ensure icon-only anchor tags and buttons have descriptive `aria-label` attributes.
