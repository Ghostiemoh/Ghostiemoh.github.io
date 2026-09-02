# Brand: Muhammad Auwal Abdulaziz, Data Analyst portfolio

Status: active

## Direction

Editorial data storytelling with the feel of a modern analytical workspace.
Restraint carried by specificity: real numbers, hand-built charts, and a
deliberate type pairing, not tasteful defaults. It should read as a document,
not a landing page.

## Palette (tokens live in `src/index.css` `:root`)

| Token          | Value (sRGB)      | Use                                             |
| -------------- | ----------------- | ---------------------------------------------- |
| `--paper`      | `248 247 243`     | Main background, warm off-white                 |
| `--panel`      | `255 254 250`     | Cards, tinted sections, figure frames          |
| `--ink`        | `35 34 31`        | Primary text; the dark contact band            |
| `--muted`      | `91 88 80`        | Secondary copy, captions                       |
| `--line`       | `214 209 197`     | Every border and hairline rule                 |
| `--accent`     | `144 87 33`       | The highlighted bar in a chart only            |
| `--accent-dark`| `92 55 21`        | Links, eyebrows, primary button, focus ring    |

One accent. It marks the single most important thing in a view and nothing else.
`--accent-dark` on `--paper` clears AA for body text; `--accent` is reserved for
fills and large marks.

## Type

A trio, never all-Inter:

- **Source Serif 4** (400/500/600): every `h1`, `h2`, `h3`, the hero flow rail,
  and the resume headings. Normal tracking. No negative letter-spacing, no
  oversized display weights.
- **Inter** (400/500/600/700): body copy, buttons, navigation.
- **Roboto Mono** (400/500): eyebrows, section numbers, case IDs, tool tags, and
  every number rendered inside a chart.

## Figures

Charts are hand-authored inline `<svg>`, driven by the `chart` object on a
featured case study. Rules:

- Bars only, one accent-filled bar per figure, everything else in `--ink` at 80%.
- Hairline gridlines in `--line`; a solid `--ink` baseline.
- Direct labels on every bar. No legends.
- A partial or excluded value is drawn with a hatch fill and a short mono tag.
- Every figure has an SVG `<title>` and `<desc>`, and a plain-language
  "What to notice" caption sits directly beneath it.
- Numbers must trace to a workbook in `/public/projects` or a linked repo.

## Motion

One fade-and-rise as a section enters view, 200ms, and nothing else. No parallax,
glow, scanlines, or looping animation. Fully removed under
`prefers-reduced-motion`. Logic lives in `src/utils/motion.js`.

## Voice

Specific, evidence-first, plain. "The analysis found..." over invented impact.
Every case study ends on a recommendation. No command-centre, protocol, shard,
forensic, or tactical language. No em dashes or en dashes anywhere.
