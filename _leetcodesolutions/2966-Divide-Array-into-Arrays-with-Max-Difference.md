---
title: "2966 Divide Array into Arrays with Max Difference"
number: 2966
date: 2024-02-01
collection: leetcodesolutions
permalink: /leetcodesolutions/2966/
excerpt: Solution to [Leetcode 2966](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/)
---
# [Problem](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to group the list of numbers into groups of 3 such that for each group, the difference between the largest and smallest number in the group is less than `k`. If we cannot form a solution that meets this condition, we return an empty list.

This problem lends itself to sorting as by sorting the array, we can count upwards in groups of three and continuously check if a valid trio is formed. If a valid trio is not formed, it is not possible as by sorting we are guaranteed to be using the closest grouping of numbers.

We can sort the numbers, and then continue adding trios until we either reach a trio that requires we return an empty array, or we have gone through each number in which case we return our groupings.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the provided numbers, `nums`.
2. Initialize our result array, `res`.
3. Iterate through the sorted `nums` and check that for each trio, the largest and smallest numbers are less than `k` apart. If not, return an empty array. Otherwise, we add the trio to `res`.
4. Return `res` after iterating through all numbers.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n))$. We perform a sort of the array of numbers and then iterate through each number and perform constant time operations during each iteration. $O(n*\log(n))+O(n)*O(1)\rightarrow O(n*\log(n))$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. Sorting in-place takes some space that has linear space complexity.

## Code
```python
class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        res = []

        for i in range(0, len(nums), 3):
            if nums[i + 2] - nums[i] > k:
                return []
            res.append([nums[i], nums[i + 1], nums[i + 2]])
        return res
```