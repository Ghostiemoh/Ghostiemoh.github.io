import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import {
  caseStudies,
  credentials,
  capabilities,
  evidence,
  method,
  profile,
  shelf
} from './portfolioData';

const publicDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../public');

function walkStrings(value, out = []) {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => walkStrings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => walkStrings(v, out));
  return out;
}

describe('portfolio content integrity', () => {
  it('has a curated set of case studies with a smaller featured subset', () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(6);
    const featured = caseStudies.filter((c) => c.featured);
    expect(featured.length).toBeGreaterThanOrEqual(3);
    expect(featured.length).toBeLessThan(caseStudies.length);
  });

  it('gives every case study the full narrative arc', () => {
    const required = [
      'id',
      'slug',
      'title',
      'outcome',
      'category',
      'role',
      'problem',
      'dataset',
      'process',
      'finding',
      'implication'
    ];
    for (const c of caseStudies) {
      for (const key of required) {
        expect(c[key], `${c.id} is missing ${key}`).toBeTruthy();
      }
      expect(Array.isArray(c.tools) && c.tools.length, `${c.id} tools`).toBeTruthy();
      if (c.links !== undefined) {
        expect(Array.isArray(c.links) && c.links.length, `${c.id} links`).toBeTruthy();
      }
    }
  });

  it('gives every featured case study a chart with bars and a caption', () => {
    for (const c of caseStudies.filter((x) => x.featured)) {
      expect(c.chart, `${c.id} chart`).toBeTruthy();
      expect(c.chart.bars.length, `${c.id} chart bars`).toBeGreaterThan(1);
      expect(c.chart.caption, `${c.id} chart caption`).toBeTruthy();
      c.chart.bars.forEach((b) => {
        expect(typeof b.value).toBe('number');
        expect(b.value).toBeLessThanOrEqual(c.chart.axisMax);
      });
      expect(c.deeper.checked.length).toBeGreaterThan(0);
      expect(c.deeper.recommend.length).toBeGreaterThan(0);
    }
  });

  it('uses no em dashes or en dashes anywhere in the copy', () => {
    const strings = walkStrings([
      profile,
      evidence,
      caseStudies,
      shelf,
      method,
      capabilities,
      credentials
    ]);
    const offenders = strings.filter((s) => /[–—]/.test(s));
    expect(offenders).toEqual([]);
  });

  it('points every internal asset link at a file that exists in public/', () => {
    const internal = [];
    caseStudies.forEach((c) => {
      (c.links || []).forEach((l) => {
        if (l.href.startsWith('/')) internal.push(l.href);
      });
      if (c.image && c.image.startsWith('/')) internal.push(c.image);
    });
    credentials.forEach((c) => {
      if (c.href && c.href.startsWith('/')) internal.push(c.href);
    });
    shelf.forEach((g) =>
      g.items.forEach((it) => {
        if (it.href && it.href.startsWith('/')) internal.push(it.href);
      })
    );
    for (const href of internal) {
      expect(existsSync(resolve(publicDir, `.${href}`)), `${href} not found in public/`).toBe(true);
    }
  });

  it('exposes real contact and profile links', () => {
    expect(profile.email).toMatch(/@/);
    expect(profile.github).toMatch(/^https:\/\/github\.com\//);
    expect(profile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
    expect(profile.twitter).toMatch(/^https:\/\/x\.com\//);
  });
});
