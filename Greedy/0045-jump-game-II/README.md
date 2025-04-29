## 45. Jump Game II

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`...

[LeetCode - Jump Game II](https://leetcode.com/problems/jump-game-ii/description/?envType=problem-list-v2&envId=array)

## Difficulty

Medium

## Note

### 題目理解

- 從最左邊出發，看能不能跳到最右邊
- 每個位置的數字代表「從這個位置最多可以往後跳幾格」
- 要找出最少跳躍次數

### 解法思路

- 設置一個變數 `maxIndex`，紀錄最遠可以跳到的位置
- 設置一個變數 `end`，紀錄當前可以跳到的最遠位置
- 設置一個變數 `steps`，紀錄跳躍次數
- 遍歷 `nums` 陣列
  - 每次都更新 `maxIndex` 為 `Math.max(maxIndex, i + nums[i])`
  - 如果 `i` 等於 `end`，代表可以跳到當前的最遠位置，則更新 `end` 為 `maxIndex`，並且 `steps++`
  - 否則就繼續遍歷
- 最後回傳 `steps`

### 時間與空間複雜度

- 時間複雜度：O(n)
- 空間複雜度：O(1)
