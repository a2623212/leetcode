/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  let i = 0;
  while (i >= 0) {
    if (n === 2 ** i) return true;
    i++;
    if (2 ** i > n) return false;
  }
};

// @lc code=end
