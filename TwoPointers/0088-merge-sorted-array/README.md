# 88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively...

[LeetCode - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我們把兩個已經排序好的陣列合併成一個，並且合併後的陣列也是排序好的
- 題目保證 nums1 有足夠的空間可以容納 nums2 的元素

### 解法思路

1. 初始想法：

   - 用雙迴圈，把 nums2 的元素插入到 nums1 中
   - 插入後，再對 nums1 進行排序
   - 但這樣時間複雜度是 O(n²)，不符合題目要求

2. 優化想法：

   - 使用雙指針，從後面開始比較

### 時間與空間複雜度

- 時間複雜度：O(m+n)，因為只遍歷一次 nums1 和 nums2
- 空間複雜度：O(1)，因為只使用常數空間