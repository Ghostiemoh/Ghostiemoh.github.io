# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2025-05-17 - Visual Feedback for Disabled Buttons
**Learning:** The contact form sets `submitButton.disabled = true` during submission, but lacks visual styling to indicate this state to users, making the interface feel unresponsive during async operations.
**Action:** Always ensure that when a button's `disabled` state is toggled via JavaScript, corresponding CSS styles (like `opacity` or `cursor` changes) are applied to provide clear visual feedback.
