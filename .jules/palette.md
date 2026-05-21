## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-21 - Accessible Icon-Only Links in Mapped Arrays
**Learning:** Icon-only links inside mapped project arrays (like `ProjectGrid.jsx`) are completely invisible to screen readers without proper labels, leading to a frustrating experience. Furthermore, generic labels like "View on GitHub" are insufficient when there are multiple identical links on the page.
**Action:** Always add both `aria-label` (for screen readers) and `title` (for visual hover tooltips) to any icon-only links. Use template literals to make these labels dynamic and descriptive (e.g., `View ${file.title} on GitHub`), specifically within dynamic mapped arrays.
