## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.

## 2026-08-19 - Keyboard accessibility for complex toggle groups
**Learning:** Custom interactive components like NexusToggle that use Tailwind group hover effects often miss critical keyboard accessibility and screen reader support.
**Action:** Ensure custom buttons implement `aria-pressed` to denote active state, provide `aria-label` for screen readers, and pair `group-hover` reveal effects with `group-focus-within` and `focus-visible` utility classes for keyboard users.
