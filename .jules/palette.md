## 2024-04-17 - Missing ARIA Labels on Icon-only Links and Buttons
**Learning:** React components containing arrays of icon-only elements (like `socialLinks`) and mobile navigation toggles often lack accessible names, causing screen readers to announce unhelpful information.
**Action:** Always verify that mapped arrays of interactive elements include an accessible name property to inject into an `aria-label`, and ensure interactive UI toggles (like mobile menus) use both `aria-label` and `aria-expanded` attributes.
