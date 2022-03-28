/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let temp1 = [];
  let temp2 = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (temp1.includes(n)) {
      temp2.push(n);
    } else {
      temp1.push(n);
    }
  }
  if (temp2.length > 0) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
