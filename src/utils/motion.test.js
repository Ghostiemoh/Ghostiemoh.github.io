import { describe, it, expect } from 'vitest';
import { timing, revealClass, prefersReducedMotion } from './motion';

describe('motion timing tokens', () => {
  it('keeps the reveal short and non-looping', () => {
    expect(timing.revealMs).toBeLessThanOrEqual(250);
    expect(timing.staggerMs).toBeLessThanOrEqual(100);
    expect(timing.ease).toMatch(/cubic-bezier/);
  });
});

describe('revealClass', () => {
  it('always carries the base reveal class', () => {
    expect(revealClass(false)).toBe('reveal');
    expect(revealClass(true)).toContain('reveal');
  });

  it('adds is-visible only once visible', () => {
    expect(revealClass(false)).not.toContain('is-visible');
    expect(revealClass(true)).toContain('is-visible');
  });
});

describe('prefersReducedMotion', () => {
  it('is false when window is undefined (server render)', () => {
    expect(prefersReducedMotion()).toBe(false);
  });
});
