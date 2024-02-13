---
title: "167 Two Sum II - Input Array is Sorted"
number: 167
date: 2024-02-12
collection: leetcodesolutions
permalink: /leetcodesolutions/167/
excerpt: Solution to [Leetcode 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)
---
# [Problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find two integers from a sorted array which equal a target number and return the indices of those two integers.

This problem is fairly simple because we are guaranteed that the array is in non-dreasing order and that there is a solution to the problem. We can start a pointer at the beginning of the array which is the smallest number and another pointer at the end of the array which is the largest number. If the sum is larger than we would like, we decrement the right pointer and check again. If the sum is smaller, we increment the left pointer and check again. This will find the solution in $O(n)$.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a left pointer, `L`, to the first index.
2. Initialize a right poitner, `R`, to the last index.
3. Continue checking the current sum formed by the indices, if the current sum is less than the target value, increment the left pointer, if the current sum is greater than the target value, decrement the right pointer. If the sum is equal to the target sum, we return the indices in a list, by adding one as the solution is expecting 1-based indices.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We will traverse each number in the array only once and our pointers only move in one direction so we utilize linear time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our pointers.

## Code
```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        L = 0
        R = len(numbers) - 1
    
        while L < R:
            if numbers[L] + numbers[R] == target:
                return [L + 1, R + 1]
            elif numbers[L] + numbers[R] > target:
                R -= 1
            else:
                L += 1
```