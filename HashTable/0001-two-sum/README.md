## Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target...

[LeetCode - Two Sum](https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我們在一個陣列中找到兩個數字，使得它們的和等於 target
- 題目保證只有一個答案，而且不會有重複的數字

### 解法思路

1. 初始想法：

   - 用一個雙迴圈，一直到 i 和 j 項的合等於 target
   - 但這樣時間複雜度是 O(n²)，不符合題目要求
   
2. 優化想法：

   - 用一個 Map 來儲存數字和它的索引
   - 遍歷陣列，宣告 complement 變數，計算 target 扣除當前項目的值
   - 如果 complement 在 Map 中存在，就返回它的索引和當前的索引
   - 如果 complement 在 Map 中不存在，就把它和它的索引加入 Map

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次陣列
- 空間複雜度：O(n)，因為需要用一個 Map 來儲存數字和它的索引