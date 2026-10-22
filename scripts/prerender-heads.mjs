// Runs after `vite build` (npm "postbuild"). The site is a single-page app, so
// every route is served the homepage index.html and only gets its own title and
// share card once JavaScript runs. Link previewers (LinkedIn, X, WhatsApp, Slack)
// never run it, so this writes a static copy of index.html for /writing and for
// each post, with that page's own head. Vercel serves these files before the
// catch-all rewrite. It also writes /llms.txt, a plain-text map of the site.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { clipDescription, parseFrontmatter, renderHead } from './prerender-lib.mjs';
import { caseStudies, profile } from '../src/utils/portfolioData.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://ghostiemoh.com';
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const posts = readdirSync(join(root, 'src', 'content', 'writing'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const slug = f.replace(/\.md$/, '');
    const fm = parseFrontmatter(readFileSync(join(root, 'src', 'content', 'writing', f), 'utf8'));
    return { slug, ...fm };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

function write(path, html) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
}

write(
  join(dist, 'writing', 'index.html'),
  renderHead(template, {
    url: `${SITE}/writing`,
    title: `Writing | ${profile.name}`,
    description:
      'Long-form write-ups of data analysis work: the question, the first reading that turned out wrong, and the number a decision could rest on.',
    image: `${SITE}/og.png`
  })
);

for (const post of posts) {
  // A JPG copy of the thumbnail, because not every previewer renders WebP.
  const og = `/images/og/${post.slug}.jpg`;
  const image = existsSync(join(dist, og)) ? `${SITE}${og}` : `${SITE}/og.png`;
  write(
    join(dist, 'writing', post.slug, 'index.html'),
    renderHead(template, {
      url: `${SITE}/writing/${post.slug}`,
      title: `${post.title} | ${profile.name}`,
      description: post.description,
      image,
      imageAlt: post.title,
      type: 'article',
      published: post.date
    })
  );
}

const llms = [
  `# ${profile.name}, ${profile.title}`,
  '',
  `> ${profile.summary}`,
  '',
  `Based in ${profile.location}. Contact: ${profile.email}. Code: ${profile.github}`,
  '',
  '## Case studies',
  '',
  ...caseStudies.map((c) => `- [${c.title}](${SITE}/#work): ${clipDescription(c.outcome, 220)}`),
  '',
  '## Writing',
  '',
  ...posts.map((p) => `- [${p.title}](${SITE}/writing/${p.slug}) (${p.date}): ${clipDescription(p.description, 220)}`),
  ''
].join('\n');
writeFileSync(join(dist, 'llms.txt'), llms);

console.log(`prerendered /writing and ${posts.length} posts, wrote llms.txt`);
