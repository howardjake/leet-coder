/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
    for (let i = len; i > 1; i--) {
        if (nums[i] == nums[i - 2]) {
            nums.splice(i, 1)
            i++
            len--
        }
    }
    return len
};