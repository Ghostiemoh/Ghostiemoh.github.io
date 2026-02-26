# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-23 - Interactive Elements Hidden via Opacity
**Learning:** Elements hidden visually using CSS opacity or transitions (like a 'Back to Top' button) remain in the DOM and keyboard tab order unless explicitly managed.
**Action:** When creating fade-in interactive elements, dynamically toggle `tabindex='-1'` and `aria-hidden='true'` alongside the visual classes to prevent users from focusing on invisible controls.
