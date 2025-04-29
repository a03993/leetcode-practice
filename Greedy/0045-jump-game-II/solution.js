/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxIndex = 0;
  let end = 0;
  let steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (i === end) {
      end = maxIndex;
      steps++;
    }
  }
  return steps;
};
