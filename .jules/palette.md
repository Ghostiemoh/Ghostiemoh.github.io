## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2026-04-16 - Ensure Keyboard Accessibility for Hover-Revealed UI Patterns
**Learning:** Action links in card components (like `ProjectGrid` and `BentoHub`) were hidden via `opacity-0` and only revealed on `group-hover`. Keyboard users tabbing through the interface couldn't see the links they focused on.
**Action:** When creating container classes with `group-hover:opacity-100`, always pair them with their `focus-within` equivalents (e.g., `focus-within:opacity-100` or `focus-within:translate-y-0`) to ensure hidden actions become visible when focused, and add explicit `focus-visible:ring-2` styles to the interactive child elements.
