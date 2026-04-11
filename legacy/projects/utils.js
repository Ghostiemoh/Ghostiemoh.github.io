// Shared utility functions for projects

/**
 * Calculates a potential reward based on prediction confidence, actual outcome, and stake amount.
 * The closer the prediction is to the actual, the higher the multiplier.
 *
 * @param {number} predictionConfidence - User's prediction (0-100)
 * @param {number} actualOutcome - Actual outcome (0-100)
 * @param {number} stake - Amount staked
 * @returns {Object} An object containing the calculated reward and the difference
 */
function calculateReward(predictionConfidence, actualOutcome, stake) {
    if (isNaN(stake) || stake <= 0) {
        return { reward: 0, difference: NaN };
    }

    const difference = Math.abs(predictionConfidence - actualOutcome);
    let rewardMultiplier;

    if (difference === 0) {
        rewardMultiplier = 2.5; // Perfect prediction bonus
    } else if (difference <= 5) {
        rewardMultiplier = 1.8; // Very close
    } else if (difference <= 10) {
        rewardMultiplier = 1.4; // Close
    } else if (difference <= 20) {
        rewardMultiplier = 0.9; // Moderate
    } else if (difference <= 30) {
        rewardMultiplier = 0.4; // Somewhat off
    } else {
        rewardMultiplier = 0.05; // Far off, minimal return
    }

    const potentialReward = stake * rewardMultiplier;
    return { reward: potentialReward, difference: difference };
}

// Export for ES module testing environment
export { calculateReward };
