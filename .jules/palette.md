## 2026-08-13 - Focus states for hidden actions
**Learning:** Tailwind UI hover-revealed containers require focus-within for keyboard accessibility.
**Action:** Pair `group-hover` with `group-focus-within`, and ensure interactive children have `focus-visible` rings.
## 2026-08-26 - Keyboard Accessibility in NexusToggle
**Learning:** Complex custom toggle groups like `NexusToggle` in this codebase that heavily rely on `group-hover` for revealing contextual information (like status readouts or secondary labels) completely hide this information from keyboard users who cannot hover.
**Action:** Always pair `group-hover` with `group-focus-within` on the parent container, apply `group-focus-visible` to individual nested elements (e.g., `group-focus-visible/btn:`), and ensure the active button state is semantically communicated using `aria-pressed` along with a clear `aria-label` for screen readers.
