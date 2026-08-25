## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.

## 2026-08-25 - Accessible Toggle States and Named Groups
**Learning:** Toggle buttons require `aria-pressed` for screen readers, and when using Tailwind named groups (e.g., `group/btn`), child elements must use `group-focus-visible/{name}` to respond to keyboard focus on the parent button.
**Action:** Add `aria-pressed={isActive}` to toggle elements and ensure `group-focus-visible` is used alongside `group-hover` for focus-revealed child text.
