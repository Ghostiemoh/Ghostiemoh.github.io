## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-24 - Dynamic ARIA Labels for Icon-Only Actions
**Learning:** Mapped lists of items (like project cards) with identical icon-only actions create ambiguity for screen reader users when static aria-labels are used (e.g., "View", "Download").
**Action:** Always inject specific item context (like `${project.title}`) into the aria-label of action buttons within arrays to ensure distinct and meaningful announcements.
