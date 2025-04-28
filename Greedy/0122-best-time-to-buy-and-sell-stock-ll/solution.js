/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buyPrice = 0;
  let isBuy = false;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && !isBuy) {
      isBuy = true;
      buyPrice = prices[i];
    }
    if (prices[i] > prices[i + 1] && isBuy) {
      profit += prices[i] - buyPrice;
      buyPrice = 0;
      isBuy = false;
    }
  }
  if (isBuy) {
    profit += prices[prices.length - 1] - buyPrice;
  }

  return profit;
};
