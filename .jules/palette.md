## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.

## 2026-08-17 - Focus states for named groups
**Learning:** Tailwind CSS named groups (`group/{name}`) require specific focus modifiers (`group-focus-visible/{name}:`) for keyboard accessibility. Standard arbitrary combinations like `focus-within/btn:` are invalid.
**Action:** Always pair `group-hover/{name}` with `group-focus-visible/{name}` to ensure hidden children are revealed when the named parent group receives keyboard focus.
