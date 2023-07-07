class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:
        l = 0
        t = 0
        min_len = len(nums) + 1
        for r, num in enumerate(nums):
            t += num
            while t >= target:
                min_len = min(min_len, r - l + 1)
                t -= nums[l]
                l += 1
        return min_len if min_len <= len(nums) else 0 