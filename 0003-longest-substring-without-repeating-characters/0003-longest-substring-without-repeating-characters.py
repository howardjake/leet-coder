class Solution(object):
  def lengthOfLongestSubstring(self, s):
    g = set()
    largest = 0
    left = 0 
    for right in range(len(s)):
      if s[right] not in g:
        g.add(s[right])
        largest = max(largest, right - left + 1)
      else:
        while s[right] in g:
          g.remove(s[left])
          left += 1  
        g.add(s[right])
    return largest
    
    