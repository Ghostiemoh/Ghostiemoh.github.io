## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-22 - Accessible Custom Toggle Groups
**Learning:** When implementing complex custom toggle groups using Tailwind's named groups (e.g., `group/btn`), keyboard accessibility requires explicitly pairing hover states with focus states. The correct syntax for applying styles to children when a named group receives focus is `group-focus-visible/{name}:` or `group-focus-within/{name}:`. ARIA attributes (`aria-pressed` and `aria-label`) are essential for screen readers since the custom elements lack native semantics.
**Action:** Always include `aria-pressed`, `aria-label`, `focus-visible:ring`, and map `group-hover` effects to `group-focus-within`/`group-focus-visible` for custom interactive components.
