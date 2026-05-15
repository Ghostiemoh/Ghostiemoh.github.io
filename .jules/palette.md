## 2025-01-01 - Initial Setup
**Learning:** Initial Palette journal setup
**Action:** Ready to record critical UX insights

## 2025-01-01 - Form Associations and Icon Labels
**Learning:** Implicit label wrapping isn't always reliable or used (as seen in SecureDirective). Explicit `htmlFor`/`id` bindings are necessary for form accessibility. Furthermore, icon-only interactive elements (like ExternalLink and GitHub links) require both `aria-label` for screen readers and `title` attributes for helpful visual hover states.
**Action:** Always map the label's `htmlFor` to the input's `id`. For icon-only links mapped from arrays, inject contextual ARIA labels and titles.
