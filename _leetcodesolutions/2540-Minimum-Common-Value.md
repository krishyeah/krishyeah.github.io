---
title: "2540 Minimum Common Value"
number: 2540
date: 2024-03-08
collection: leetcodesolutions
permalink: /leetcodesolutions/2540/
excerpt: Solution to [Leetcode 2540](https://leetcode.com/problems/minimum-common-value/description/)
---
# [Problem](https://leetcode.com/problems/minimum-common-value/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the lowest common integer between two non-decreasing arrays.

We can solve this problem by simply storing all the first list in a set, and then iterating through the second list for the first integer which is repeated between the sets. The first number we find is guaranteed to be the lowest common integer as the lists are sorted in non-decreasing order. This solution has a time complexity of $O(n+m)$ and a space complexity of $O(n)$. We can do better however and solve this problem using two pointers in a constant space complexity solution.

We can use two pointers starting at the beginning of the lists since the lists are sorted in non-decreasing order and we want to return the lowest common integer. We then check to see if the two integers pointer two by our pointers are equal to each other and return the integer if so. If not, we increment the pointer belonging to the lower integer. Because we have non-decreasing arrays, if we iterate the pointer of the greater integer, we are guaranteed to get a number equal to or greater than the number we just saw. This will ensure that our next check will fail again. Thus, we must increment the pointer of the lower integer. We continue until we run through all numbers in either of the lists, or we find a common integer which we return.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a pointer for each array.
2. While the pointers are in bounds for their respective arrays check to see if they point to the same integer. If they point to the same integer, return that integer. If they point to different integers, increment the pointer that points to the lower integer.
3. Return -1 if either pointer goes out of bounds and we have not yet returned the common integer.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n+m)$. We iterate through both lists which takes time linear to the size of both arrays.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our two pointers.

## Code
```python
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        n1 = n2 = 0

        len_nums1 = len(nums1)
        len_nums2 = len(nums2)

        while n1 < len_nums1 and n2 < len_nums2:
            if nums1[n1] < nums2[n2]:
                n1 += 1
            elif nums2[n2] < nums1[n1]:
                n2 += 1
            else:
                return nums1[n1]
        
        return -1
```