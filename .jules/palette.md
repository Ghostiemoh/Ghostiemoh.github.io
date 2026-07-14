## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-02-19 - Keyboard Accessibility for Hover Actions
**Learning:** In Tailwind UI patterns, action buttons frequently rely solely on `group-hover` classes (e.g., `group-hover:opacity-100`), making them completely inaccessible to keyboard users.
**Action:** Always pair `group-hover` states with their `group-focus-within` equivalents (e.g., `group-focus-within:opacity-100`) on the parent container, and ensure interactive child elements have clear `focus-visible` indicators.
