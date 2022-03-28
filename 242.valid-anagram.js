/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sString = s.split("").sort().join();
  const tString = t.split("").sort().join();

  if (sString === tString) return true;

  return false;
};
// @lc code=end
