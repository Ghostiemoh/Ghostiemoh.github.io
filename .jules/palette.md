## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.
## 2024-05-18 - Append Project Title to Aria Labels
**Learning:** For users employing screen readers, repeating action terms like "View", "Download" and "Link" inside a grid of nearly identical cards provides virtually no conversational guidance. Without specific context appended, they are unable to differentiate between the cards if they are skipping sequentially.
**Action:** Always inject contextual identifiers natively into `aria-label` elements inside arrays (e.g., `aria-label="View \${project.title}"`) instead of hardcoding non-descriptive strings across loops.
