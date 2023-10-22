"use strict";
function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    let shortestCombination = null;
    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            const combination = [...remainderResult, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}
const nums = [1, 2, 3, 4, 25];
const targetSum = 100;
console.log(bestSum(targetSum, nums));
