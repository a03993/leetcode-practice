## Palindrome Number

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

[LeetCode - Palindrome Number](https://leetcode.com/problems/palindrome-number/description/?envType=problem-list-v2&envId=array)

## Difficulty

Easy

## My Thinking

- 把數字轉成字串後將其反轉，再比較是否相同
- 考慮到負數的問題，需要先排除負數

## Final Solution

使用迴文數的特性，只反轉一半的數字，然後比較是否相同

- 時間複雜度 Time Complexity：O(log n)
- 空間複雜度 Space Complexity：O(1)

## Notes & Learnings

- 雖然用字串操作，好寫、好讀懂，但時間和空間複雜度皆為 O(n)
- 迴文數的特性是，從中間切一半，左邊和右邊會對稱，所以可以只反轉一半的數字，然後比較是否相同
- 負數和 10 的倍數都不是迴文數

## My Attempts

```js
// 初始版本：字串反轉
function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  const reversed = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );
  return x === reversed;
}
```
