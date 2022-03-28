/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 摩爾投票法 / 計算次數
  let count = 1,
    majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (majority === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
// @lc code=end
