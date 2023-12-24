---
title: "217 Contains Duplicate"
number: 217
date: 2023-12-06
collection: leetcodesolutions
permalink: /leetcodesolutions/217/
excerpt: Solution to [Leetcode 217](https://leetcode.com/problems/contains-duplicate/description/)
---
# [Problem](https://leetcode.com/problems/contains-duplicate/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requis us to whether a duplicate exists in an array. We know we must iterate through the array and can store the numbers for look up in a quick-lookup data structure; however, instead of looking for the values, if we store in a set, since the set only contains unique items, if the size of the set is not equal to the size of the array, we can return `True` for having a duplicate.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a set of the array
2. Return whether the number of elements in the array is the same as the number of elements in the set.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through every element in the array once to put it into the set. The set inclusion takes $O(1)$ time so we have $O(n * 1) \rightarrow O(n)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. As the set takes up additional space that is proportional to the size of the input.

## Code
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
```