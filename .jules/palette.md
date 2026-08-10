## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## $(date +%Y-%m-%d) - Focus Visibility and Tailwind Groups
**Learning:** Adding `focus-within:opacity-100` is effective for revealing hidden elements if they contain focusable children (e.g., links or buttons). However, adding it to non-interactive decorative elements (like an icon in a card) is ineffective since they can't receive focus. Furthermore, Tailwind's correct syntax for group focus styling on a child is `group-focus-visible/btn:opacity-30`, not `focus-within/btn:opacity-30`.
**Action:** Always ensure the target container actually holds focusable elements before relying on `focus-within`. When modifying group interactions in Tailwind, double-check the correct modifier prefix for focus states (`group-focus-visible` vs `focus-within`).
