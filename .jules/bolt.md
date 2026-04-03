## 2026-04-03 - Cache DOM elements in contact form
**Learning:** In asynchronous UI flows like form submission fallbacks, attaching event listeners inside a timeout (or repeated function call) can lead to redundant event listener accumulation. This causes multiple executions of the same logic.
**Action:** Overwrite existing handlers using `element.onclick = ...` rather than `addEventListener` when the listener depends on local closure variables that change with each execution.
