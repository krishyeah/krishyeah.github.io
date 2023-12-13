---
title: "228 Summary Ranges"
number: 228
date: 2023-11-13
collection: leetcodesolutions
permalink: /leetcodesolutions/228/
excerpt: Solution to [Leetcode 228](https://leetcode.com/problems/summary-ranges/description/)
---
# [Problem](https://leetcode.com/problems/summary-ranges/description/)

# Solution 1

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem asks us to keep track of continuous ranges within an array that contains unique increaing elements. This problem seems easy to solve as a two pointer problem keeping track of the start and the end of each range and adding it to the result as necessary.

## Approach
<!-- Describe your approach to solving the problem. -->
We utilize two pointers to keep track of the current contiguous range. We increment the right pointer with the two following conditions:
1. If the current number is not $1$ more than the previous number, it is not part of a continuous range and we add the range to our result. If there is more than $1$ number in the range, we create a string representation of a range of numbers from `L` to `R - 1` otherwise just add `L` as a string. `L` moves to `R` and we increment `R`.
2. If the current number that `R` points to is $1$ more than the number at `R - 1`, then we increment `R`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate though the array once doing a constant time operation on each step.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ to store the result.

## Code
```python
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
            
        res = []

        L = 0
        R = 1

        while R < len(nums):
            if nums[R] != nums[R - 1] + 1:
                if R - L == 1:
                    res.append(str(nums[L]))
                else:
                    res.append(str(nums[L]) + "->" + str(nums[R - 1]))
                L = R
                R += 1
            else:
                R += 1
        
        if R - L == 1:
            res.append(str(nums[L]))
        else:
            res.append(str(nums[L]) + "->" + str(nums[R - 1]))
    
        return res
```