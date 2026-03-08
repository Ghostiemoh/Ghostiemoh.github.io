# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Unsemantic Skill Progress Bars
**Learning:** Custom CSS-based progress bars implemented using `<div>` elements were entirely ignored by screen readers, creating a disconnect between visual data and accessibility.
**Action:** Always map visual data representations like progress bars to their semantic ARIA equivalents (`role="progressbar"`, `aria-valuenow`, `aria-label`) to ensure parity for assistive technologies.