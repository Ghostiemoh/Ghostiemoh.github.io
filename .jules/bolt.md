## 2025-05-27 - Handling CRLF Line Endings
**Learning:** The repository contains files with CRLF (Windows) line endings (e.g., `index.html`). Applying Git diffs or patches using `replace_with_git_merge_diff` fails if the diff expects LF line endings.
**Action:** Always convert files to Unix format using `dos2unix <filename>` before attempting to modify them with patch tools.

## 2025-05-27 - LCP Optimization for Static Sites
**Learning:** For static sites like this one, LCP images (especially above-the-fold profile pictures) should have `loading="lazy"` removed and `fetchpriority="high"` added to improve perceived load speed.
**Action:** Audit image tags in the initial viewport and optimize their loading attributes.
