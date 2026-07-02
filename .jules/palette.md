## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-07-02 - Icon-Only Button Accessibility in BentoHub & NexusToggle
**Learning:** Found multiple icon-only buttons (like Eye/Download/ExternalLink in BentoHub and ProjectViewer, and Mode buttons in NexusToggle) that rely solely on `title` attributes or surrounding visual context, lacking explicit `aria-label` attributes. This makes them less accessible to screen readers, especially when tooltips may not be natively read.
**Action:** Always ensure icon-only buttons (`<button>`, `<a>` acting as buttons) have descriptive `aria-label` attributes, even if a `title` attribute is present.
