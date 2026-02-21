## 2025-05-18 - Unused CSS and Dead JS
**Learning:** `style.css` exists in the codebase but is not referenced in `index.html` or other project files, meaning custom styles are likely relying entirely on Tailwind or inline styles. `index.html` contained a block of dead Javascript code attempting to observe `.skill-container`, a class that does not exist in the HTML.
**Action:** When optimizing, check for resource usage before assuming optimization is needed (e.g. optimizing a CSS file that isn't loaded). Remove dead code to reduce parsing time and confusion.
