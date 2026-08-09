## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-08-09 - Keyboard Accessibility for Hover-Revealed UI Patterns
**Learning:** Hover-dependent reveals (like `group-hover:opacity-100`) in this app's Tailwind implementation completely block keyboard-only users from discovering or interacting with actions, since opacity-0 hides them without removing them from the tab order.
**Action:** Always pair hover-revealed container classes with `focus-within` equivalents (e.g. `focus-within:opacity-100 focus-within:translate-y-0`) and ensure interactive child elements have `focus-visible:ring-2` and distinct `aria-label`s for proper a11y support.
