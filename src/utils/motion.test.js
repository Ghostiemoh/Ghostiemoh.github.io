import { describe, it, expect } from 'vitest';
import { transitions, variants } from './motion.js';

describe('Motion configuration parameters', () => {
  it('should utilize natural Apple-style spring parameters', () => {
    expect(transitions.spring).toEqual({
      type: 'spring',
      duration: 0.4,
      bounce: 0.15
    });
  });

  it('should utilize a fast, premium ease-out curve for smooth transitions', () => {
    expect(transitions.smooth).toEqual({
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1]
    });
  });

  it('should utilize a snappy scan reveal transition', () => {
    expect(variants.scanReveal.transition).toEqual({
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1]
    });
  });
});
