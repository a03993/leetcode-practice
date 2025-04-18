# 80. Remove Duplicates from Sorted Array II

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same...

[LeetCode - Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=problem-list-v2&envId=array)

## Difficulty

Medium

## Note

### 題目理解

- 要從一個已經排序好的陣列中，移除重複的元素
- 每個元素最多只能出現兩次
- in-place 處理，也就是不能額外開陣列
- 要求保持元素的相對順序

### 解法思路

1. 初始想法：

   - 用 `insertIndex` 來記錄目前要填入的位置，初始值為 1
   - 用 `temp` 來記錄當前元素
   - 用 `isTwice` 來紀錄是否找到兩個相同的元素
   - 用 for 迴圈遍歷整個陣列
   - 如果該項等於 `temp` 且 `isTwice` 為 false
     - 把當前元素填入 `insertIndex` 的位置
     - `isTwice` 設為 true
     - `insertIndex` 加 1
   - 如果該項不等於 `temp`
     - 就把當前元素填入 `insertIndex` 的位置
     - `isTwice` 設為 false
     - `insertIndex` 加 1
   - 最後回傳 `insertIndex` 就是題目要的 k

   ```js
   var removeDuplicates = function (nums) {
     let insertIndex = 1;
     let temp = nums[0];
     let isTwice = false;

     for (let i = 0; i < nums.length - 1; i++) {
       if (nums[i + 1] == temp && !isTwice) {
         isTwice = true;
         nums[insertIndex] = nums[i + 1];
         insertIndex++;
       }
       if (nums[i + 1] !== temp) {
         isTwice = false;
         temp = nums[i + 1];
         nums[insertIndex] = nums[i + 1];
         insertIndex++;
       }
     }
     return insertIndex;
   };
   ```

2. 優化想法：

   - 用 `insertIndex` 來記錄目前要填入的位置，初始值為 0
   - 用 for 迴圈遍歷整個陣列
   - 0 和 1 項一定會保留
   - 當 `insertIndex` 小於 2 或當前元素不等於 `insertIndex - 2` 項元素
     - 就把當前元素填入 `insertIndex` 的位置
     - `insertIndex` 加 1
   - 最後回傳 `insertIndex` 就是題目要的 k

   > 雖然跟初始想法的效率差不多，但結構更簡單，也提升了可讀性

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只用 for 迴圈遍歷一次
- 空間複雜度：O(1)，因為沒有額外開陣列
