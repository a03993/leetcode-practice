## 55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position...

[LeetCode - Jump Game](https://leetcode.com/problems/jump-game/description/?envType=problem-list-v2&envId=array)

## Difficulty

Medium

## Note

### 題目理解

- 從最左邊出發，看能不能跳到最右邊
- 每個位置的數字代表「從這個位置最多可以往後跳幾格」

### 解法思路

1. 初始想法：

   - 設置一個變數 `maxIndex`，初始值為 `nums[0]`，紀錄最遠可以跳到的位置
   - 在 `0` 到 `maxIndex` 之間遍歷 `nums` 陣列
   - 如果 `i` 加上 `nums[i]` 大於等於 `nums.length - 1`，則回傳 `true`，反之則回傳 `false`

   > 不能只遍歷到「一開始的 maxPosition」，因為有些情況是一格一格跳的，例如： `[1, 1, 1, 0]`

2. 優化想法：

   - `maxIndex` 變數初始值設為 `0`
   - 遍歷 `nums` 陣列
     - 如果 `i` 大於 `maxIndex`，代表連當前的位置都跳不過去，回傳 `false`
     - 否則就更新 `maxIndex` 為 `Math.max(maxIndex, i + nums[i])`
     - 若整個迴圈都遍歷完，代表可以跳到最右邊，回傳 `true`

### 時間與空間複雜度

- 時間複雜度：O(n)，因為只遍歷一次陣列
- 空間複雜度：O(1)，因為只使用常數空間
