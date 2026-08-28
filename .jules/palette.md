## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-28 - Accessible Custom Toggle Groups and Named Group Focus Modifiers
**Learning:** For complex custom toggle groups using Tailwind CSS, named group hover effects (e.g., `group-hover/btn`) must be paired with their exact focus equivalent (e.g., `group-focus-visible/btn:` or `group-focus-within/btn:`) rather than arbitrary combinations. Elements requiring focus need an explicit focus ring and structural state indicators like `aria-pressed` and `aria-label`.
**Action:** When styling nested interactive components, always pair `group-hover` with `group-focus-within` on the container. Ensure buttons include `focus-visible:ring-2`, `aria-pressed` for toggle states, and explicit `aria-label` for screen readers.
