## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2026-04-16 - Add dynamic ARIA labels and focus indicators to action buttons
**Learning:** Icon-only action buttons in mapped lists (like project cards) need dynamic `aria-label`s to distinguish them, and elements hidden by `group-hover:opacity-100` are inaccessible to keyboard users unless paired with `focus-within:opacity-100`.
**Action:** Always pair `group-hover:opacity-100` with `focus-within:opacity-100` on interactive containers, and ensure all interactive elements have visible focus outlines (`focus-visible:ring-2`) and context-aware `aria-label`s.
