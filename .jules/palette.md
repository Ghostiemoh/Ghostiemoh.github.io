## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## $(date +%Y-%m-%d) - Focus-Visible States for Complex Hover Cards
**Learning:** When interactive elements (like cards) use complex `group-hover` styles that affect multiple nested children (e.g., changing icon backgrounds, revealing footers, animating chevrons), standard tab focusing only highlights the container default outline, missing the contextual cues provided by hover.
**Action:** Always pair `group-hover` with `group-focus-visible` (and ensure the parent has `group` and `focus-visible:ring` or equivalent) to ensure keyboard users receive the exact same visual context and micro-interactions as mouse users when navigating interactive component grids.
