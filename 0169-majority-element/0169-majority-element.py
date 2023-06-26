class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        distro = dict()
        for num in nums :
            if distro.get(str(num)):
                distro[str(num)] += 1
            else:
               distro[str(num)] = 1
        return int(max(distro, key=distro.get))