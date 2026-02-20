# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-24 - Unlabeled Custom Progress Bars
**Learning:** Custom progress bars (like the skill bars) implemented as `div`s lack semantic meaning, making them invisible or confusing to screen readers.
**Action:** Always add `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-label` to custom progress bar components.
