"use strict";
function howSum(targetSum, numbers) {
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (const num of numbers) {
        const remTarget = targetSum - num;
        const remResult = howSum(remTarget, numbers);
        if (remResult !== null) {
            const combinationSum = [...remResult, num];
            return combinationSum;
        }
    }
    return null;
}
const numbs = [7, 14];
const targetsSum = 300;
console.log(howSum(targetsSum, numbs));
