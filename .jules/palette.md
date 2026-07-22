## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-10-24 - Interactive Elements Hidden by Parent Hover
**Learning:** This app frequently uses `group-hover:opacity-100` on parent containers to reveal interactive elements (like project view/github links), which makes them inaccessible to keyboard users because tabbing to them doesn't reveal them visually.
**Action:** Always pair `group-hover` visibility classes with their `focus-within` equivalents (e.g., `focus-within:opacity-100`) on the container, and add `focus-visible` outlines and `aria-labels` to the child buttons/links.
