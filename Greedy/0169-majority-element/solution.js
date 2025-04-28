/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const temp = null;
  const count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      temp = nums[i];
      count = 1;
    } else if (temp === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return temp;
};
