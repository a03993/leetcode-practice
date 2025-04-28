## Majority Element

Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array...

[LeetCode - Majority Element](https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我們在一個陣列中找到一個出現次數超過 n/2 的元素

### 解法思路

1. 初始想法：

   - 用 `temp` 變數來儲存出現次數最多的元素，一開始設為 `nums[0]`
   - 用 `other` 變數來儲存另一個元素，不設定初始值
   - 用 `count` 變數來計算 `temp` 出現的次數，一開始設為 `0`
   - 遍歷陣列，如果遇到相同的元素，`count` 就加 1，如果不相同，`other` 就等於 `nums[i]`
   - 如果最後 `count` 大於 `n/2`，就回傳 `temp`，否則回傳 `other`

   > 以上解法僅針對只有 2 種數字的情況，因題目的 example 讓我以為只有 2 種數字，直到 submit 後才發現有錯誤

2. 優化想法：

   - ~~使用 Sort 來解題，排序後次數超過 `n/2` 的元素一定會在 `nums[n/2]`~~ (時間複雜度為 O(n log n)，不符合題目要求)
   - 因為題目保證一定會有一個出現次數超過 `n/2` 的元素，所以可以用[摩爾投票法](https://zh.wikipedia.org/zh-tw/%E5%A4%9A%E6%95%B0%E6%8A%95%E7%A5%A8%E7%AE%97%E6%B3%95)來解題

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次陣列
- 空間複雜度：O(1)，因為只使用常數空間
