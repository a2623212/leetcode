/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let buyPrice = prices[0];
  let majorityProfix = 0;
  // 每一天都有買價，可以計算出最大值
  for (let i = 1; i < prices.length; i++) {
    const n = prices[i];
    if (buyPrice > n) {
      buyPrice = n;
    }
    // 計算現在的獲利情形
    let currentProfit = n - buyPrice;

    if (currentProfit > majorityProfix) {
      majorityProfix = currentProfit;
    }
  }
  return majorityProfix;
};
// @lc code=end
