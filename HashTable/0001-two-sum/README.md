## Two Sum

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

[LeetCode - Two Sum](https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array)


## Difficulty

Easy

## My Thinking

- 一開始想用雙迴圈，時間複雜度是 O(n²)
- 嘗試計算 `target - nums[i]`，然後用迴圈去找後面有沒有這個差值
- 但時間太慢，題目有提示 Hash Table，所以改試看看用 Map


## Final Solution

使用 HashMap 儲存過去的數字和索引，邊走邊查找 `target - current` 是否已出現過。

- 時間複雜度 Time Complexity：O(n)
- 空間複雜度 Space Complexity：O(n)

## Notes & Learnings

- 雜湊表（Map）可以用 O(1) 的時間找到 key
- map 中記錄的是「前一個數」，順序不能弄反

## My Attempts

```js
// 初始版本：暴力解
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```
