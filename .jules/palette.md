## 2024-05-14 - Custom Toggle Group Accessibility
**Learning:** Custom toggle groups (like NexusToggle) lack semantic association with their active state, context for screen readers, and focus indicators for keyboard navigation.
**Action:** Implement `aria-pressed={isActive}`, `aria-label`, and `focus-visible:ring-2` to custom toggle buttons to ensure accessibility.
