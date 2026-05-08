const test = require('node:test');
const assert = require('node:assert');
const { calculateReward } = require('./utils.cjs');

test('calculateReward correctly calculates potential reward and difference', async (t) => {

    await t.test('invalid stakes - NaN', () => {
        const result = calculateReward(50, 50, NaN);
        assert.deepStrictEqual(result, { reward: 0, difference: NaN });
    });

    await t.test('invalid stakes - <= 0', () => {
        const resultZero = calculateReward(50, 50, 0);
        assert.deepStrictEqual(resultZero, { reward: 0, difference: NaN });

        const resultNegative = calculateReward(50, 50, -10);
        assert.deepStrictEqual(resultNegative, { reward: 0, difference: NaN });
    });

    await t.test('perfect prediction - difference = 0 (multiplier 2.5)', () => {
        const result = calculateReward(50, 50, 100);
        assert.deepStrictEqual(result, { reward: 250, difference: 0 }); // 100 * 2.5
    });

    await t.test('very close prediction - difference <= 5 (multiplier 1.8)', () => {
        const result = calculateReward(55, 50, 100);
        assert.deepStrictEqual(result, { reward: 180, difference: 5 }); // 100 * 1.8

        const result2 = calculateReward(50, 55, 100);
        assert.deepStrictEqual(result2, { reward: 180, difference: 5 });

        const result3 = calculateReward(52, 50, 100);
        assert.deepStrictEqual(result3, { reward: 180, difference: 2 });
    });

    await t.test('close prediction - difference <= 10 (multiplier 1.4)', () => {
        const result = calculateReward(60, 50, 100);
        assert.deepStrictEqual(result, { reward: 140, difference: 10 }); // 100 * 1.4

        const result2 = calculateReward(56, 50, 100);
        assert.deepStrictEqual(result2, { reward: 140, difference: 6 });
    });

    await t.test('moderate prediction - difference <= 20 (multiplier 0.9)', () => {
        const result = calculateReward(70, 50, 100);
        assert.deepStrictEqual(result, { reward: 90, difference: 20 }); // 100 * 0.9

        const result2 = calculateReward(61, 50, 100);
        assert.deepStrictEqual(result2, { reward: 90, difference: 11 });
    });

    await t.test('somewhat off prediction - difference <= 30 (multiplier 0.4)', () => {
        const result = calculateReward(80, 50, 100);
        assert.deepStrictEqual(result, { reward: 40, difference: 30 }); // 100 * 0.4

        const result2 = calculateReward(71, 50, 100);
        assert.deepStrictEqual(result2, { reward: 40, difference: 21 });
    });

    await t.test('far off prediction - difference > 30 (multiplier 0.05)', () => {
        const result = calculateReward(81, 50, 100);
        // Using Math.abs to avoid floating point precision issues in test if they occur
        // However, 100 * 0.05 is exactly 5
        assert.deepStrictEqual(result, { reward: 5, difference: 31 }); // 100 * 0.05

        const result2 = calculateReward(100, 0, 100);
        assert.deepStrictEqual(result2, { reward: 5, difference: 100 });
    });

});