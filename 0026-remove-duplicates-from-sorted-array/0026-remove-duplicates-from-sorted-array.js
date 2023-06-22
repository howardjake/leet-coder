/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] == nums[i + 1])  {
            nums.splice(i, 1);
            i -= 1;
            len -= 1
        }
    }
    return len;
}