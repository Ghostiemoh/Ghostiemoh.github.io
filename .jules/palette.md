## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-18 - Missing ARIA Labels on Icon-only Elements in Modals/Hubs
**Learning:** Found multiple instances where dynamic interactive elements (view, download, open) inside mapped arrays in `BentoHub.jsx` and modal actions in `ProjectViewer.jsx` were missing accessible names, only relying on `title` attributes. Screen readers would struggle to differentiate actions across multiple projects.
**Action:** Always inject specific context via template literals (e.g., `aria-label={"View " + project.title}`) to differentiate similar button actions across mapped project lists, replacing or supplementing `title` attributes.
