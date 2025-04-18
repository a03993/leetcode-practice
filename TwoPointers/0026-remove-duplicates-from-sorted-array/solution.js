/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[insertIndex - 1] !== nums[i + 1]) {
      nums[insertIndex] = nums[i + 1];
      insertIndex++;
    }
  }
  return insertIndex;
};
