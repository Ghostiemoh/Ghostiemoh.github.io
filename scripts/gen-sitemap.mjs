// Regenerates public/sitemap.xml from the routes and the Markdown posts in
// src/content/writing. Runs automatically before every build (npm "prebuild"),
// so adding a post is the only step needed to get it into the sitemap.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src', 'content', 'writing');
const SITE = 'https://ghostiemoh.com';
const today = new Date().toISOString().slice(0, 10);

const posts = readdirSync(contentDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const raw = readFileSync(join(contentDir, f), 'utf8');
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    let date = today;
    if (fm) {
      const d = fm[1].match(/^date:\s*(.+)$/m);
      if (d) date = d[1].trim().replace(/^["']|["']$/g, '');
    }
    return { slug: f.replace(/\.md$/, ''), date };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const urls = [
  { loc: `${SITE}/`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
  {
    loc: `${SITE}/writing`,
    lastmod: posts[0]?.date || today,
    changefreq: 'weekly',
    priority: '0.8'
  },
  ...posts.map((p) => ({
    loc: `${SITE}/writing/${p.slug}`,
    lastmod: p.date,
    changefreq: 'yearly',
    priority: '0.6'
  }))
];

const body = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n` +
      `    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs (${posts.length} posts)`);
