# 189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative...

[LeetCode - Rotate Array](https://leetcode.com/problems/rotate-array/description/?envType=problem-list-v2&envId=array)

## Difficulty

Medium

## Note

### 題目理解

- 把陣列向右輪轉 k 個元素，也就是把陣列最後面的 k 個元素移到最前面
- 例如，[1, 2, 3, 4, 5] 向右輪轉 2 個元素會變成 [4, 5, 1, 2, 3]
- k 是正數，但不一定會小於 `nums.length`
- in-place 解法

### 解法思路

1. 初始想法：

   - 從第 0 個元素開始，將 `nums.length - k` 的元素 push 到 `nums` 的後面
   - `nums.slice(k)` 移除 `nums` 的前 `k` 個元素

   > 但這樣 不是 in-place 解法

2. 優化想法：

   - 先將 `nums` 反轉
   - 再將 `nums` 的前 `k` 個元素反轉
   - 最後將 `nums` 的後面部分反轉
   - 要記得 `k` 可能會大於 `nums.length`，所以需要先對 `k` 取餘數

### 時間與空間複雜度

- 時間複雜度：O(n)，需要遍歷一次陣列
- 空間複雜度：O(1)，in-place 解法

### 結論

我用的是三次反轉法，每次反轉都用 two pointers 完成，能有效做到 O(1) 空間的 in-place 處理
