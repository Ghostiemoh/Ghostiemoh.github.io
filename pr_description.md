## 💡 What
Added missing `aria-label` attributes to icon-only links and buttons in the `Layout.jsx` component. Specifically:
- Added `aria-label` to the desktop social media navigation links (`motion.a`).
- Added `aria-label` to the mobile social media navigation links (`a`).
- Added `aria-label="Open menu"` and `aria-expanded` attributes to the mobile menu open button.
- Added `aria-label="Close menu"` to the mobile menu close button.

## 🎯 Why
Icon-only elements are visually self-explanatory but lack context for screen reader users. Adding ARIA labels provides accessible names for these elements, allowing assistive technologies to announce their purpose correctly.

## 📸 Before/After
There are no visual changes; this is purely an accessibility enhancement affecting the DOM structure.

## ♿ Accessibility
- Ensures screen reader users can understand and interact with the social navigation links.
- Ensures screen reader users can understand and interact with the mobile menu open and close toggles.
- Ensures the state of the mobile menu (expanded or not) is properly announced.
