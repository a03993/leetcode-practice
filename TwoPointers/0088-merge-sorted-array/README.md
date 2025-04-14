# 88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

[LeetCode - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## My Thinking

- 一開始想用雙迴圈，時間複雜度是 O(n²)

## Final Solution

題目提示 Two Pointers，使用雙指針，從後面開始比較，時間複雜度是 O(m+n)

- 時間複雜度 Time Complexity：O(m+n)
- 空間複雜度 Space Complexity：O(1)

## Notes & Learnings

- 從陣列最後面開始比較，可以避免覆蓋 nums1 的值
