## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-23 - Accessible Named Groups and ARIA in Toggle Sets
**Learning:** For custom toggle sets like NexusToggle using Tailwind's named groups, keyboard users miss visual feedback unless `group-focus-visible/{name}` is explicitly paired with `group-hover/{name}`. Toggles also require `aria-pressed` to semantically declare active states.
**Action:** Pair `group-hover` with `group-focus-visible` on interactive children when using named groups, and implement `aria-pressed` along with `aria-label` for screen readers.
