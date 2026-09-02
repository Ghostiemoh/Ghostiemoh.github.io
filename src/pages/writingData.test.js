import { describe, it, expect } from 'vitest';
import { posts, getPost } from './writingData';

describe('writing content', () => {
  it('loads at least one post', () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it('gives every post complete, well formed metadata', () => {
    for (const p of posts) {
      expect(p.slug, 'slug').toMatch(/^[a-z0-9-]+$/);
      expect(p.title, `${p.slug} title`).toBeTruthy();
      expect(p.description, `${p.slug} description`).toBeTruthy();
      expect(p.date, `${p.slug} date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(new Date(`${p.date}T00:00:00Z`).getTime())).toBe(false);
      expect(p.dateLabel, `${p.slug} dateLabel`).toBeTruthy();
      expect(p.readingMinutes).toBeGreaterThanOrEqual(1);
      expect(p.html.length, `${p.slug} html`).toBeGreaterThan(200);
    }
  });

  it('has unique slugs', () => {
    const slugs = posts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('is ordered newest first', () => {
    for (let i = 1; i < posts.length; i += 1) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });

  it('uses no em dashes or en dashes anywhere in the copy', () => {
    for (const p of posts) {
      const blob = `${p.title}\n${p.description}\n${p.body}`;
      expect(/[–—]/.test(blob), `${p.slug} contains an en or em dash`).toBe(false);
    }
  });

  it('resolves posts by slug and returns null for the unknown', () => {
    expect(getPost(posts[0].slug)).toBe(posts[0]);
    expect(getPost('does-not-exist')).toBeNull();
  });
});
