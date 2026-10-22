// Pure helpers for scripts/prerender-heads.mjs. Kept separate so they can be unit tested.

const MAX_DESCRIPTION = 160;

export function escapeAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Search results and link previews cut descriptions off around 160 characters,
// so clip at a word boundary instead of letting them truncate mid-word.
export function clipDescription(text, max = MAX_DESCRIPTION) {
  const clean = String(text ?? '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const atSpace = cut.lastIndexOf(' ');
  return `${(atSpace > 0 ? cut.slice(0, atSpace) : cut).replace(/[\s,;:.]+$/, '')}…`;
}

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (m) data[m[1]] = m[2].trim().replace(/^(["'])(.*)\1$/, '$2');
  }
  return data;
}

function setTag(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

// Rewrite the homepage head in index.html so a crawler that does not run
// JavaScript (LinkedIn, X, WhatsApp, Slack) sees this page's own metadata.
export function renderHead(template, { url, title, description, image, imageAlt, type = 'website', published }) {
  const t = escapeAttr(title);
  const meta = (attr, key, content) => {
    const re = new RegExp(`<meta\\s+${attr}="${key.replace(/[:]/g, '\\:')}"\\s+content="[^"]*"\\s*\\/?>`);
    return [re, `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`];
  };
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = setTag(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(url)}" />`);
  const pairs = [
    meta('name', 'description', clipDescription(description)),
    meta('property', 'og:type', type),
    meta('property', 'og:url', url),
    meta('property', 'og:title', title),
    meta('property', 'og:description', clipDescription(description)),
    meta('property', 'og:image', image),
    meta('property', 'og:image:alt', imageAlt || title),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', clipDescription(description)),
    meta('name', 'twitter:image', image)
  ];
  if (published) pairs.push(meta('property', 'article:published_time', published));
  for (const [re, tag] of pairs) html = setTag(html, re, tag);
  // The 1200x630 size only describes the homepage card; a post image has its own size.
  if (!image.endsWith('/og.png')) {
    html = html.replace(/\s*<meta\s+property="og:image:(width|height)"\s+content="[^"]*"\s*\/?>/g, '');
  }
  return html;
}
