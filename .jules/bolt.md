## 2024-05-23 - CRLF Line Endings in HTML Files
**Learning:** This repository uses CRLF (Windows) line endings for HTML files. Standard Unix tools and patch application may fail or cause massive diffs if not handled correctly.
**Action:** Use `dos2unix` to normalize line endings before applying patches, or ensure tools respect existing line endings to minimize diff noise.
