# 27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val...

[LeetCode - Remove Element](https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我從一個陣列中，移除所有等於 val 的元素，而且不可以額外開陣列
- 要用 in-place 的方式處理，也就是只能操作 nums 陣列本身
- 回傳的不是新陣列，而是「有效元素的個數 k」，代表 nums 前 k 個位置已經被正確填好

### 解法思路

- 用一個 `insertIndex` 來記錄目前要填入的位置
- 用 for 迴圈遍歷整個陣列，遇到不是 val 的數字，就把它添加到 `insertIndex` 的位置，然後 `insertIndex++`
- 遍歷完整個陣列，就能把所有不是 val 的數字都移到陣列最前面
- 最後回傳 `insertIndex` 就是題目要的 k

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次陣列
- 空間複雜度：O(1)，因為沒有使用額外的空間
