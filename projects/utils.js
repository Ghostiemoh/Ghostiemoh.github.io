// Shared utility functions for projects

/**
 * Calculates a potential reward based on prediction confidence, actual outcome, and stake amount.
 * The closer the prediction is to the actual, the higher the multiplier.
 *
 * @param {number} predictionConfidence - User's prediction (0-100)
 * @param {number} actualOutcome - Actual outcome (0-100)
 * @param {number} stake - Amount staked
 * @param {number} difficulty - Difficulty level affecting the multiplier (default: 1.0)
 * @returns {Object} An object containing the calculated reward and the difference
 */
function calculateReward(predictionConfidence, actualOutcome, stake, difficulty = 1.0) {
    if (isNaN(stake) || stake <= 0) {
        return { reward: 0, difference: NaN };
    }

    const difference = Math.abs(predictionConfidence - actualOutcome);

    // Define reward tiers with their respective base multipliers
    const REWARD_TIERS = [
        { threshold: 0, multiplier: 2.5 },  // Perfect prediction bonus
        { threshold: 5, multiplier: 1.8 },  // Very close
        { threshold: 10, multiplier: 1.4 }, // Close
        { threshold: 20, multiplier: 0.9 }, // Moderate
        { threshold: 30, multiplier: 0.4 }, // Somewhat off
        { threshold: Infinity, multiplier: 0.05 } // Far off, minimal return
    ];

    // Find the matching tier based on the difference
    const tier = REWARD_TIERS.find(t => difference <= t.threshold);
    const baseMultiplier = tier.multiplier;

    // Apply difficulty to the multiplier
    const dynamicMultiplier = baseMultiplier * difficulty;
    const potentialReward = stake * dynamicMultiplier;

    return { reward: potentialReward, difference: difference };
}

// Export for Node.js testing environment
if (typeof module !== 'undefined') {
    module.exports = { calculateReward };
}
