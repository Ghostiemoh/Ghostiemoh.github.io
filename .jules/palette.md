# Palette's Journal

## 2025-05-15 - Missing Skip-to-Content Link
**Learning:** This portfolio site lacks a "Skip to content" link, a fundamental accessibility feature for keyboard users to bypass navigation.
**Action:** Always check for bypass blocks in single-page applications or pages with heavy navigation headers.

## 2025-05-16 - Visual Required Form Indicators
**Learning:** The contact form has HTML `required` attributes, but no visual indication for sighted users.
**Action:** Always add visual indicators like a red asterisk to explicitly mark required form fields, matching the underlying HTML5 constraints to improve predictability for sighted users.

## 2026-03-24 - Form Interactions & Accessibility
**Learning:** Dynamically rendered form messages and disabled states require explicit accessibility handling. Specifically, fallback containers (like an `emailFallback` or `formMessages` div that unhides on error/success) won't be announced to screen readers unless marked with `aria-live`. Additionally, buttons that enter a disabled state need clear visual indicators (like `disabled:opacity-75 disabled:cursor-not-allowed`) to prevent users from wondering if the application is frozen.
**Action:** Always add `aria-live="polite"` to dynamically toggled form message containers and ensure buttons have visual disabled styling (e.g., using Tailwind's `disabled:` modifiers) when they are deactivated during asynchronous processes.
