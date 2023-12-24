---
title: "55 Jump Game"
number: 55
date: 2023-12-12
collection: leetcodesolutions
permalink: /leetcodesolutions/55/
excerpt: Solution to [Leetcode 55](https://leetcode.com/problems/jump-game/description/)
---
# [Problem](https://leetcode.com/problems/jump-game/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is slightly tricky at first as it seems like it would take a complicated $O(n^2)$ solution perhaps to go through all possibilities, but we can take a greedy approach that will give us an $O(n)$ solution.

Since our jumps are going left to right, we just need to iterate from left to right and see the furthest that we can reach from each number. If we reach a number that is further than our furthest possible jump, we know that we have reached the limits of our jump and return `false`. In essence, we can only utilize the jump distance from a certain index, if that index is reachable by a previous index's jump. By checking if each index is reachable by the furthest possible jump of previously reachable indices, we can continue extending the jump space until we reach the end.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Set a `reachable` counter to 0 as initially we can only start at the first index.
2. Iterate through the indices of `nums`.
    - If the current index is not reachable, return `false`.
    - Set `reachable` to the maximum of `reachable` and furthest index from the current index.
    - If the new reachable index can get you to the last index of nums, return `true`.
3. Return true if we reach the last index and break out of the loop.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the indices of `nums` once and perform constant time operations for each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space apart from a variable for the maximum reachable index.

## Code
```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        reachable = 0
        for i in range(len(nums)):
            if i > reachable:
                return False
            if reachable > (len(nums) - 1):
                return True
            reachable = max(reachable, i + nums[i])
        
        return True
```