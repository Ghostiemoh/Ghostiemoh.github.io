## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-06-20 - Dynamic ARIA labels for list items
**Learning:** When adding `aria-label` attributes to interactive elements inside a mapped array or list (e.g., project cards), always include dynamic item-specific context (like `${project.title}`) in the label rather than using a static string.
**Action:** This ensures screen reader users can distinguish between similar actions across multiple items.
