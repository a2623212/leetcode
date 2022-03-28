/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  // note: divide into two baskets for comparison
  let temp1 = [];
  let temp2 = [];

  nums.forEach((item) => {
    if (temp1.includes(item)) {
      temp2.push(item);
    } else {
      temp1.push(item);
    }
  });

  for (num of temp1) {
    if (!temp2.includes(num)) {
      return num;
    }
  }
};
// @lc code=end
