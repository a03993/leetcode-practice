## Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise...

[LeetCode - Palindrome Number](https://leetcode.com/problems/palindrome-number/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## Note

### 題目理解

- 題目要我們判斷一個數字是否是迴文數
- 迴文數的定義是，從左到右和從右到左讀都是一樣的數字
- 負數和 10 的倍數都不是迴文數
- 不能把數字轉換成字串來解

### 解法思路

1. 初始想法：把數字反轉，再比較是否相同

2. 優化想法：只反轉一半的數字，然後比較是否相同

### 時間與空間複雜度

- 時間複雜度：O(log n)，因為只反轉一半的數字
- 空間複雜度：O(1)，因為只使用常數空間