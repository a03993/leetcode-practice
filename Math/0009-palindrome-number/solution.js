/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
  const halfReversed = 0;
  while (x > halfReversed) {
    halfReversed = halfReversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === halfReversed || x === Math.floor(halfReversed / 10);
};
