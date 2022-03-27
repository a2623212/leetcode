/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  // Any number smaller than 7 is a ugly number.
  if (n <= 6) {
    return true;
  }

  if (n % 2 === 0) {
    return isUgly(Math.floor(n / 2));
  }

  if (n % 3 === 0) {
    return isUgly(Math.floor(n / 3));
  }

  if (n % 5 === 0) {
    return isUgly(Math.floor(n / 5));
  }

  return false;
};
// @lc code=end
