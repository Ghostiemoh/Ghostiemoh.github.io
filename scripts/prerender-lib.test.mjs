import { describe, it, expect } from 'vitest';
import { clipDescription, renderHead, parseFrontmatter } from './prerender-lib.mjs';

const TEMPLATE = `<html lang="en"><head>
<link rel="canonical" href="https://ghostiemoh.com/" />
<title>Home title</title>
<meta name="description" content="Home description" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ghostiemoh.com/" />
<meta property="og:title" content="Home title" />
<meta property="og:description" content="Home og description" />
<meta property="og:image" content="https://ghostiemoh.com/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Home alt" />
<meta name="twitter:title" content="Home title" />
<meta name="twitter:description" content="Home twitter description" />
<meta name="twitter:image" content="https://ghostiemoh.com/og.png" />
</head><body><div id="app"></div></body></html>`;

describe('clipDescription', () => {
  it('leaves short text alone', () => {
    expect(clipDescription('Short and sweet.')).toBe('Short and sweet.');
  });

  it('clips long text at a word boundary to at most 160 characters', () => {
    const long = 'word '.repeat(60).trim();
    const out = clipDescription(long);
    expect(out.length).toBeLessThanOrEqual(160);
    expect(out.endsWith('…')).toBe(true);
    expect(out).not.toMatch(/\s…$/);
  });
});

describe('parseFrontmatter', () => {
  it('reads quoted and unquoted fields', () => {
    const fm = parseFrontmatter('---\ntitle: "A post"\ndate: 2026-10-22\ndescription: It\'s here\n---\nBody');
    expect(fm).toEqual({ title: 'A post', date: '2026-10-22', description: "It's here" });
  });
});

describe('renderHead', () => {
  const html = renderHead(TEMPLATE, {
    url: 'https://ghostiemoh.com/writing/x',
    title: 'Post "title" & more',
    description: 'Post description',
    image: 'https://ghostiemoh.com/images/og/x.jpg',
    imageAlt: 'Post alt',
    type: 'article',
    published: '2026-10-22'
  });

  it('replaces every homepage value with the page value', () => {
    expect(html).not.toContain('Home');
    expect(html).not.toContain('content="https://ghostiemoh.com/"');
    expect(html).toContain('<link rel="canonical" href="https://ghostiemoh.com/writing/x" />');
    expect(html).toContain('<meta property="og:type" content="article" />');
    expect(html).toContain('<meta name="twitter:image" content="https://ghostiemoh.com/images/og/x.jpg" />');
    expect(html).toContain('<meta property="article:published_time" content="2026-10-22" />');
  });

  it('escapes the title in attributes and in the title element', () => {
    expect(html).toContain('<title>Post &quot;title&quot; &amp; more</title>');
    expect(html).toContain('content="Post &quot;title&quot; &amp; more"');
  });

  it('keeps the app mount point', () => {
    expect(html).toContain('<div id="app"></div>');
  });
});
