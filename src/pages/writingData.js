// Writing content system.
// Posts are authored as Markdown with a small "---" frontmatter block in
// src/content/writing/*.md. This module loads them at build time (no runtime
// fetch), parses the frontmatter, and renders the body to HTML with marked.
// The Markdown here is first-party and trusted, so raw HTML is allowed through.

import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

// Images render as a captioned <figure>. In a post, write:
//   ![alt text](/images/writing/name.png "Optional caption shown under the image")
marked.use({
  renderer: {
    image(token) {
      const href = token.href || '';
      const alt = String(token.text || '').replace(/"/g, '&quot;');
      const caption = token.title ? `<figcaption>${token.title}</figcaption>` : '';
      return `<figure class="post-figure"><img src="${href}" alt="${alt}" loading="lazy" decoding="async" />${caption}</figure>`;
    }
  }
});

// marked wraps a standalone image in <p>; a <figure> is not valid there, so lift it out.
function tidyFigures(html) {
  return html.replace(
    /<p>\s*((?:<figure class="post-figure">[\s\S]*?<\/figure>\s*)+)<\/p>/g,
    '$1'
  );
}

const modules = import.meta.glob('../content/writing/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, '');
    data[key] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

function readingMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 210));
}

function dateLabel(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, body } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      description: data.description || '',
      dateLabel: dateLabel(data.date),
      readingMinutes: readingMinutes(body),
      body,
      html: tidyFigures(marked.parse(body))
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
