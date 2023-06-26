class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        best = 0
        low = prices[0]
        for x in prices:
            best = max(best, x - low)
            low = min(low, x)
        return best 