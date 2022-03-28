/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 設立一個變數裝出現過的數字
  let temp = [];
  let index = 0;
  nums.forEach((item) => {
    if (!temp.includes(item)) {
      nums[index] = item;
      index++;
      temp.push(item);
    }
  });

  let length = nums.length - temp.length;

  nums.splice(index, length);
};
// @lc code=end
