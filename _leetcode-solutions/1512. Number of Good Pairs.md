---
title: '1512. Number of Good Pairs'
number: 1512
date: 2023-10-03
collection: leetcode-solutions
permalink: /leetcode-solutions/1512/
---

# Intuition
The brute force solution is very simple and just requires you to traverse in an O($n^2$) fashion in order to find the good pairs. But by using a "bank" where we store the frequency of previously found integers, we can use those to quickly recall the number of good pairs we can make while doing a linear scan, O($n$), through the array. 

# Approach
A good pair found when the integer in the array is equal to another previously found integer. For all integers, we do not care about their placement, but only how many we will find to the left in the array. By storing this information in a dictionary for quick retreival and not relying on another scan to find these elements, we increae the efficiency from O($n^2$) to O($n$).

# Complexity
- Time complexity:
    - O($n$)

- Space complexity:
    - O($n$)

# Code
```
class Solution(object):
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        bank = {}
        count = 0
        for i in range(len(nums)):
            if nums[i] not in bank:
                bank[nums[i]] = 1
            else:
                count += bank[nums[i]]
                bank[nums[i]] += 1
        return count
```