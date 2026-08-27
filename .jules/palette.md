## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-27 - Accessible Custom Toggles
**Learning:** Custom toggle components lack native screen reader context for active states and often hide helper text behind pointer-only hover events.
**Action:** Always implement `aria-pressed` for toggle states, `aria-label` for context, and pair `group-hover` visual reveals with `group-focus-within` / `group-focus-visible` for keyboard users.
