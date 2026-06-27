## 2024-10-24 - Keyboard Accessible Hover Actions
**Learning:** This design system heavily relies on `group-hover:opacity-100` to reveal interactive elements (like view/download buttons on project cards). This hides actions from keyboard-only users navigating via tab.
**Action:** Always pair hover-revealed classes (e.g., `group-hover:opacity-100`) with their focus equivalents (e.g., `focus-within:opacity-100`) on the parent container, and add `focus-visible` outlines to the interactive elements themselves.
