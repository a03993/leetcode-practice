## 121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

[LeetCode - Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我們在一個陣列中找到兩個數字，使得它們的差值最大
- 必須先買再賣，買的時間必須在賣的時間之前
- 若沒有買賣的機會，則回傳 0
- 如果是遞減的陣列，則回傳 0

### 解法思路

1. 初始想法：

   - 設一個 `result` 變數，初始值為 `0`
   - 跑一個雙迴圈，找到最大差值

   > 但這樣時間複雜度是 O(n²)，當 prices 很大時，會超時

2. 優化想法：

   - 設置 `minPrice` 變數，初始值為 Infinity
   - 設置 `maxProfit` 變數，初始值為 0
   - 遍歷 `prices` 陣列，更新 `minPrice` 和 `maxProfit`
   - 如果當前價格比 `minPrice` 低，則更新 `minPrice`
   - 如果當前價格減去 `minPrice` 比 `maxProfit` 大，則更新 `maxProfit`
   - 最後回傳 `maxProfit`

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次 prices 陣列
- 空間複雜度：O(1)，因為只使用常數空間
