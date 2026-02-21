# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-15 - Nested Interactive Controls
**Learning:** The "View Project" cards wrapped `<button>` elements inside `<a>` tags, which is invalid HTML and problematic for assistive technology.
**Action:** Replaced with `<a>` tags styled as buttons using the existing Tailwind classes.
