## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-25 - Form Accessibility
**Learning:** Found that custom React form components (like `SecureDirective`) often miss explicit label associations because designers rely on visual proximity (e.g., placing the label text right above the input) rather than semantic `htmlFor`/`id` pairing. This breaks keyboard usability (clicking labels to focus) and screen reader support.
**Action:** Always verify custom forms for explicit `htmlFor` and `id` pairings, especially in modern component-based designs where semantic HTML is sometimes overlooked in favor of visual styling.
