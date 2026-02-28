const test = require('node:test');
const assert = require('node:assert');
const { wrapLabel } = require('./utils.js');

test('wrapLabel handles labels shorter than maxLength', () => {
    const label = 'Short label';
    const result = wrapLabel(label, 16);
    assert.strictEqual(result, label, 'Short label should return as-is');
});

test('wrapLabel handles labels exactly equal to maxLength', () => {
    const label = 'Sixteen chars !!';
    const result = wrapLabel(label, 16);
    assert.strictEqual(result, label, 'Label equal to maxLength should return as-is');
});

test('wrapLabel splits long labels by words correctly', () => {
    const label = 'This is a very long label that needs to be split';
    const result = wrapLabel(label, 16);

    assert.deepStrictEqual(result, [
        'This is a very',
        'long label that',
        'needs to be',
        'split'
    ], 'Long label should be wrapped correctly');
});

test('wrapLabel handles a single long word exceeding maxLength', () => {
    const label = 'Supercalifragilisticexpialidocious';
    const result = wrapLabel(label, 16);
    // Since our implementation doesn't break single words, it just returns it as the only line.
    assert.deepStrictEqual(result, ['Supercalifragilisticexpialidocious'], 'Single long word should remain intact as a line');
});

test('wrapLabel uses default maxLength of 16', () => {
    const label = 'This label has seventeen chars'; // > 16 characters
    const result = wrapLabel(label);
    assert.deepStrictEqual(result, [
        'This label has',
        'seventeen chars'
    ], 'Should use default maxLength of 16');
});

test('wrapLabel deals with multiple spaces', () => {
    const label = 'Word1   Word2   Word3';
    const result = wrapLabel(label, 10);
    // Note: split(' ') on 'Word1   Word2' yields empty string tokens for consecutive spaces.
    // Let's verify how the current implementation handles it.
    // 'Word1', '', '', 'Word2', ...
    // 'Word1 '.trim() => 'Word1'
    // This test ensures we capture current behavior correctly or reveals unexpected ones.
    const expected = [ 'Word1', 'Word2', 'Word3' ];
    assert.deepStrictEqual(result, expected, 'Should handle multiple spaces correctly');
});
