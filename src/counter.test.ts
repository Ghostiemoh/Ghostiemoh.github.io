import { describe, it } from 'node:test';
import assert from 'node:assert';
import { setupCounter } from './counter.ts';

describe('setupCounter', () => {
  it('initializes and increments counter', () => {
    let clickHandler: any = null;
    const element: any = {
      innerHTML: '',
      addEventListener: (event: string, handler: any) => {
        if (event === 'click') {
          clickHandler = handler;
        }
      }
    };

    setupCounter(element);

    // Initial state
    assert.strictEqual(element.innerHTML, 'Count is 0');
    assert.ok(clickHandler !== null, 'click handler should be registered');

    // Simulate click
    clickHandler();
    assert.strictEqual(element.innerHTML, 'Count is 1');

    // Simulate another click
    clickHandler();
    assert.strictEqual(element.innerHTML, 'Count is 2');
  });
});
