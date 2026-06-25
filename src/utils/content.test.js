import { describe, it, expect } from 'vitest';
import { MODES, CONTENT_MATRIX } from './content.js';

describe('Content Configuration', () => {
  it('should define expected MODES', () => {
    expect(MODES).toBeDefined();
    expect(typeof MODES.ON_CHAIN).toBe('string');
    expect(typeof MODES.ANALYTICS).toBe('string');
    expect(typeof MODES.AGENTIC).toBe('string');
    // Using loose casing checks to be resilient if constants casing varies
    expect(MODES.ON_CHAIN.toLowerCase()).toBe('on-chain');
    expect(MODES.ANALYTICS.toLowerCase()).toBe('analytics');
    expect(MODES.AGENTIC.toLowerCase()).toBe('agentic');
  });

  it('should define CONTENT_MATRIX for all MODES', () => {
    expect(CONTENT_MATRIX).toBeDefined();
    expect(CONTENT_MATRIX[MODES.ON_CHAIN]).toBeDefined();
    expect(CONTENT_MATRIX[MODES.ANALYTICS]).toBeDefined();
    expect(CONTENT_MATRIX[MODES.AGENTIC]).toBeDefined();
  });

  it('should have hero text and projects array for each mode in CONTENT_MATRIX', () => {
    Object.values(MODES).forEach((mode) => {
      const modeContent = CONTENT_MATRIX[mode];
      expect(modeContent).toHaveProperty('hero');
      expect(typeof modeContent.hero).toBe('string');
      expect(modeContent).toHaveProperty('projects');
      expect(Array.isArray(modeContent.projects)).toBe(true);
      expect(modeContent.projects.length).toBeGreaterThan(0);
    });
  });

  it('should have required fields in project items', () => {
    const requiredFields = ['id', 'title', 'category', 'description', 'tags', 'icon', 'thumbnail'];
    Object.values(MODES).forEach((mode) => {
      const projects = CONTENT_MATRIX[mode].projects;
      projects.forEach((project) => {
        requiredFields.forEach((field) => {
          expect(project).toHaveProperty(field);
        });
        expect(Array.isArray(project.tags)).toBe(true);
      });
    });
  });
});
