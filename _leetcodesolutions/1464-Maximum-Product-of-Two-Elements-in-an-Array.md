---
title: "1464 Maximum Product of Two Elements in an Array"
number: 1464
date: 2023-12-12
collection: leetcodesolutions
permalink: /leetcodesolutions/1464/
excerpt: Solution to [Leetcode 1464](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/)
---
# [Problem](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum product of two elements in a list of numbers such that they are two different numbers (i.e.: have different indices) and the final number to return is `(nums[i]-1)*(nums[j]-1)`. While the return value may seem confusing, the problem is very straight forward as the subtraction of one does not change what we are looking for. Given that all numbers are positive, we simply want to find the two largest numbers in the array.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables `max1` and `max2` to store the two highest values in the list.
2. Iterate through every number in the list.
    -  First check if the number is greater than `max1` which stores the highest value. If it is, replace `max1` with the new highest value and replace `max2` with the currently known second highest value.
    - If the number is not greater than `max1` we check whether the number is greater than `max2` and replace it if true.
3. Return the expected formula using the two highest numbers in the list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the list once and do a constant time operation on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We don't utilize any additional data structures and only store a few variables.

## Code
```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max1, max2 = 0, 0

        for num in nums:
            if num > max1:
                max1, max2 = num, max1
            elif num > max2:
                max2 = num
        
        return (max1 - 1) * (max2 - 1)
```