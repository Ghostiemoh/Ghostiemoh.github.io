## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2025-02-23 - Keyboard Accessibility for Hover Patterns
**Learning:** In Tailwind, components using `group-hover:opacity-100` to reveal interactive elements are invisible to keyboard users unless explicitly paired with `focus-within:opacity-100` on the parent container.
**Action:** Always add `focus-within:opacity-100` when using `group-hover` visibility patterns, and ensure inner interactive elements receive explicit `focus-visible` styling (like `focus-visible:ring-2`) and aria-labels.
