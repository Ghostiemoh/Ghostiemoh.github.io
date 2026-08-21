## 2024-05-14 - Initialize Palette Journal
**Learning:** Initialize the journal.
**Action:** Let's keep a record of UX improvements.
## 2026-08-21 - Custom Toggle Group Accessibility
**Learning:** When building complex custom toggle groups with hover reveal effects, the interactions are inaccessible to keyboard users unless explicitly paired with focus states. Furthermore, screen readers need explicit state management.
**Action:** Always ensure custom toggles implement `aria-pressed` for active states, `aria-label` for context, and pair `group-hover` effects with `group-focus-within` (or `group-focus-visible`) and `focus-visible` classes to guarantee a parallel experience for mouse and keyboard users.
