class Solution:
    def maxProfit(self, prices: list[int]) -> int:

        price_gain = []
        buys = []
        for idx in range( len(prices)-1 ):
            
            if prices[idx] < prices[idx+1]:
                buys.append((prices[idx], prices[idx+1]))
                price_gain.append( prices[idx+1]- prices[idx])
        print(buys, '\n', price_gain)      
        return sum( price_gain )