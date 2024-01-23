---
title: "198 House Robber"
number: 198
date: 2024-01-22
collection: leetcodesolutions
permalink: /leetcodesolutions/198/
excerpt: Solution to [Leetcode 198](https://leetcode.com/problems/house-robber/description/)
---
# [Problem](https://leetcode.com/problems/house-robber/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to calculate the maximum value of items we can steal from houses given the value of the items in each house in `nums`. We are subject to the constraint that we must not rob any adjacent houses thus we must figure out the optimal strategy in robbing houses and return the maximum value that we can rob.

This problem feels like a dynamic programming problem at first glance since we must build up our solution keeping track of the maximum value we can steal up to any house. Our base cases will be to return the maximum if there are two or less houses. Then to initialize our DP array in-place in `nums`, we make the first two values the maximum of each other. This is done because we can start with either house. If we were to start with the third or any following house, it would be more ideal to have stolen from the previous houses so the only choice is which of the first two houses to start with. Since it may be most optimal to start with the first and then skip to the fourth house, we make the first two values equal to the greater of the two. This will simplify our algorithm as we build up our DP solution. The algorithm will be for each house, the maximum value of robbing houses up to that house will be the `max()` of the sum of the value of the current house and the maximum possible value of two houses prior, or the value of the previous house. We will therefore rob a house if the optimal path includes two houses prior, and not rob the house if the optimal path includes the previous house.

We then return the last value in our array as it will contain the maximum value of robbing the optimal path.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Solve the base case of having two or less houses. If the length of `nums` is less than 3, return the max of the array.
2. Make the second value of `nums` equal to the max of the first two values so that our current maximum proporates with our algorithm.
3. For each house starting with the third house, find the maximum value of robbing houses upto the current house by finding the max of 1. the sum of the value of the current house and the maximum value of robbing houses upto two houses prior and 2. the maximum value of robbing upto the previous house.
4. Return the last value as this will be the maximum value that can be robbed from all of the houses.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array of nums once and perform a constant time operation on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space and calculate the maximum value that we can take in-place in `nums`.

## Code
```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        length = len(nums)
        if length < 3:
            return max(nums)
        
        nums[1] = max(nums[0], nums[1])
        
        for i in range(2, length):
            nums[i] = max(nums[i] + nums[i - 2], nums[i - 1])

        return nums[-1]
```