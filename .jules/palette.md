## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-16 - Keyboard Accessibility for Hover-Revealed Elements
**Learning:** When using `group-hover` to reveal information or visual styling (like glows or hidden text) in interactive components like `NexusToggle`, keyboard users miss out on these cues if focus equivalents are missing.
**Action:** Always pair `group-hover` with `group-focus-within` on parent containers, add explicit focus indicators (e.g., `focus-visible:ring-2`), and use `group-focus-visible/{name}:` for named groups.
