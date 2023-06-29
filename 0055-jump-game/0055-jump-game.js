/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    p = 0
    for (let i = 0; i < nums.length; i++) {
        console.log(i, p)
        if (i > p) {
            return false
        } else if ( p >= nums.length) {
            return true
        }
        p = Math.max(p, i + nums[i])
    }
    return true
};