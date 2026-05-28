## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-28 - Form Label Accessibility
**Learning:** Found that custom React contact forms using raw inputs often overlook `htmlFor` and `id` linking for their labels, relying solely on placeholder text or visual proximity. This is a common pattern in stylized terminal/cyberpunk UI themes where standard browser defaults are overwritten.
**Action:** Always ensure `htmlFor` on the `<label>` perfectly matches the `id` on the `<input>` or `<textarea>` to guarantee screen reader association and expand the clickable target area.
