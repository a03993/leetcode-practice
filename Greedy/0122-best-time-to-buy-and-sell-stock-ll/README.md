## 122. Best Time to Buy and Sell Stock II

You are given an integer array prices where prices[i] is the price of a given stock on the ith day...

[LeetCode - Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=problem-list-v2&envId=array)

## Difficulty

Medium

## Note

### 題目理解

- 只能持有 1 股股票，不能同時持有多股股票
- 每天都可以買賣股票，但買賣股票的時間必須在買股票之前
- 每一天都跟下一天比較，如果今天比較便宜就買，如果明天比較貴就賣

### 解法思路

- 設置一個變數 `profit`，初始值為 `0`，紀錄利潤
- 設置一個變數 `buyPrice`，初始值為 `0`，紀錄買入股票的價格
- 設置一個變數 `isBuy`，初始值為 `false`，紀錄是否買入股票
- 遍歷 `prices` 陣列
  - 如果今天比明天便宜且 `isBuy` 為 `false`，則買入股票，`isBuy` 設為 `true`，`buyPrice` 設為今天價格
  - 如果今天比明天貴且 `isBuy` 為 `true`，則賣出股票，`isBuy` 設為 `false`，`profit` 加上今天價格減去 `buyPrice`，`buyPrice` 設為 `0`
  - 如果遍歷完 `prices` 陣列後沒賣出，則 `profit` 加上最後一項扣除 `buyPrice`
- 最後回傳 `profit`

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次 `prices` 陣列
- 空間複雜度：O(1)，因為只使用常數空間
