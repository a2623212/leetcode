/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 如果 nums 包含 target，找出 index
  const targetIndex = nums.indexOf(target);

  if (targetIndex !== -1) return targetIndex;

  // 用 while 尋找比第一個目標數字大的元素在第幾個
  let num = nums[0];
  let currentFindIndex = 0;
  while (num < target) {
    currentFindIndex += 1;
    num = nums[currentFindIndex];
  }

  // 最後回傳位置
  return currentFindIndex;
};
// @lc code=end
