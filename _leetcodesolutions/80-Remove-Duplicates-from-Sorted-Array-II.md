---
title: "80 Remove Duplicates from Sorted Array II"
number: 80
date: 2023-11-06
collection: leetcodesolutions
permalink: /leetcodesolutions/80/
excerpt: Solution to [Leetcode 80](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
---
# [Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires in-place rewriting of the array with a maximum of 1 duplicates for each element in the original array. Note that the solution expects you to keep a duplicate if duplicates are present. The question writes "at most 1 duplicate"; however, removing all duplicates would not yield the correct answer.

## Approach
<!-- Describe your approach to solving the problem. -->
This problem is solved using a two pointer method as my initial intuition was to remember the position of the last "good" number both for the return and also for knowing where to insert the next number, while having a fast pointer iterate through all numbers in the array.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through all elements once while doing a constant time operation during each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as we don't introduce any data structures and only store a few variables.

## Code
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)
        
        duplicate = 0
        slow = fast = 1

        while fast < len(nums):
            if (nums[fast] == nums[fast - 1] and not duplicate):
                nums[slow] = nums[fast]
                slow += 1
                fast += 1
                duplicate = 1
            elif nums[fast] != nums[fast - 1]:
                nums[slow] = nums[fast]
                slow += 1
                fast += 1 
                duplicate = 0
            else:
                fast += 1

        return slow
```