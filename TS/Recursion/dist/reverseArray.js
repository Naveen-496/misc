"use strict";
function reverseArray(numbers, left, right) {
    if (left > right) {
        return;
    }
    [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
    reverseArray(numbers, left + 1, right - 1);
}
const nums = [2, 3, 4, 5, 6];
reverseArray(nums, 0, nums.length - 1);
console.log(nums);
