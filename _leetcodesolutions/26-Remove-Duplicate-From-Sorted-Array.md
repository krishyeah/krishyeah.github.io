---
title: "26 Remove Duplicates from Sorted Array"
number: 26
date: 2023-11-03
collection: leetcodesolutions
permalink: /leetcodesolutions/26/
excerpt: Solution to [Leetcode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
---
# [Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem initially seems like a two pointer problem as we want to keep track of the position of "good" items while continuing to iterate through the array.

## Approach
<!-- Describe your approach to solving the problem. -->
This problem is solved using a two pointer approach, similar to a slow pointer and fast pointer approach. If the fast pointer runs into a unique element (i.e.: `nums[i] != nums[i-1]`), we put the unique element to where the slow pointer is and then move the slow pointer forwards. Otherwise, while the fast pointer continues to run into duplicates, the slow pointer will wait until a new distinct element is ready to be placed in the front of the array. Remember that this only works because the array is non-decreasing and therefore we are able to track the previously seen elements by just relying on a greater number to show up and we don't need to remember all of the previous values. Also keep in mind this solution works because the in-place transformation of `nums` allows for the end values to remain with any possible value and therefore we only leave the last duplicates in place and can overwrite early duplicates.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ time complexity. We only iterate through the array once and perform a constant time operation. It is a two pointer solution; however, each one only iterates fowards so there is no repeated looping work.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ space complexity. We only use pointers and no data structures.

## Code
```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        slow = 1
        for fast in range(1, len(nums)):
            if nums[fast] != nums[fast - 1]:
                nums[slow] = nums[fast]
                slow += 1
        return slow
```