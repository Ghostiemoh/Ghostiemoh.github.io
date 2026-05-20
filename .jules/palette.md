## 2026-04-16 - Add ARIA Labels and Roles in Layout.jsx
**Learning:** Icon-only social links and mobile menu toggle buttons lacked screen reader context in the existing `Layout.jsx` design.
**Action:** Always verify that mapped arrays of icon components include an accessible name property to be used as an `aria-label`, and ensure mobile toggles use `aria-expanded` and `aria-controls`.

## 2024-05-20 - Explicit Label Associations in Animated Forms
**Learning:** In highly animated and stylized components (like `SecureDirective.jsx` with Framer Motion), relying solely on visual proximity for form labels is a common oversight. While the UI visually aligns them, screen readers cannot programmatically associate the floating text labels with their inputs without explicit `htmlFor`/`id` linking.
**Action:** When creating new custom input or form components that use styled layout elements (like `div` wrappers and custom `label` tags instead of standard browser forms), I must ensure explicit `htmlFor` and `id` pairings are manually wired up to maintain accessibility.
