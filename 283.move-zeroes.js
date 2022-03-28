/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;

  // if n !== 0 , push to array, index++
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (n !== 0) {
      nums[index] = n;
      index++;
    }
  }

  // num.length - index.length = zero
  for (index; index < nums.length; index++) {
    nums[index] = 0;
  }
};
// @lc code=end
