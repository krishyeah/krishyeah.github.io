---
title: "268 Missing Number"
number: 268
date: 2024-02-19
collection: leetcodesolutions
permalink: /leetcodesolutions/268/
excerpt: Solution to [Leetcode 268](https://leetcode.com/problems/missing-number/description/)
---
# [Problem](https://leetcode.com/problems/missing-number/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the mising number from an array. We are told the array should contain all numbers from 0 to n inclusive.

The easy approach to solving this question would be to create a set of all numbers from 0 to n and remove numbers are they are present in   `nums`. A singular element will be left in the set which we can return as the missing number. This solution is O(n) time complexity, and O(n) space complexity. We can do better however by utilizing a simple math trick.

The sum of consecutive numbers from 0 to n is $\frac{n * (n+1)}{2}$. We can simply subtract our expected sum from the sum of all elements in the given array and this will yield the missing number.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Subract the expected sum, $\frac{n * (n+1)}{2}$ from the sum of the given array. Return this difference.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize linear time for finding the sum.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space.

## Code
```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        len_nums = len(nums)
        return (len_nums * (len_nums + 1) // 2) - sum(nums)
```