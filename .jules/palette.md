## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-06-26 - Accessible Hover-Revealed UI Elements
**Learning:** Actions that are revealed on hover using `group-hover:opacity-100` are invisible to keyboard users unless they also respond to focus. Additionally, icon-only action buttons need dynamic, item-specific `aria-label`s.
**Action:** When using hover-revealed action containers, add `focus-within:opacity-100` to the container. Apply `focus-visible` styles and dynamic `aria-label`s (like `${project.title}`) to the focusable elements inside.
