/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let pair = target - nums[i]

        if (pair in map) {
            return [i, map[pair]]
        }

        map[nums[i]] = i
    }
};