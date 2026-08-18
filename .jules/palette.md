## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-18 - Interactive Elements Focus States
**Learning:** The layout's navigation and interactive elements lacked focus indicators, making keyboard navigation difficult. Additionally, using `<a href="#">` for JS-controlled non-navigational actions degrades UX.
**Action:** Always apply `focus-visible` utility classes to all interactive layout components (buttons, links, toggles) for clear keyboard accessibility, and use `<button type="button">` instead of anchor tags for JS actions.
