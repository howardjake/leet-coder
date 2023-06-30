/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let l = 0;
  let j = 0;
  let f = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    f = f > i + nums[i] ? f : i + nums[i];
    if (i == l) {
      j++;
      l = f;
    }
  }
  return j;
};