---
title: "1913 Maximum Product Difference Between Two Pairs"
number: 1913
date: 2023-12-17
collection: leetcodesolutions
permalink: /leetcodesolutions/1913/
excerpt: Solution to [Leetcode 1913](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/)
---
# [Problem](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum possible answer to `(a-b) * (c-d)` given that `a`, `b`, `c`, and `d` are all numbers at unique indices. This is quite simple and can be done in a single pass through `nums` which keeps our time complexity down to a nice $O(n)$. This beats the more trivial solution of sorting the list and then choosing the first two and last two numbers in the sorted list as that would have a time complexity of $O(n*log(n))$ based on the sorting implementation used.

As we iterate through `nums`, we keep track of the two largest numbers seen thus far, `max1` and `max2`, and keep track of the two smallest numbers seen thus far, `min1` and `min2`. As we iterate, we check if the number is larger than the largest number we have previous seen, if so, we update the two largest numbers. If it is only greater than the second largest number we see, we update just that value. We do the same for the minimum.

This is guaranteed to find numbers that are at unique indices because of the way the maximum and minimum variables are initialized and handled. They initially start higher or lower than the possible values defined in the constraints and therefore we are guaranteed to be updating each one when we come across unique values of `nums`. Since there are at least four numbers in `nums`,  we will handle all values into their correct category.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `max1` and `max2` as `0` which is lower than the lowest possible value of `1`
2. Initialize `min1` and `min2` as `10 ** 4 + 1` which is greater than the highest possible value of `10 ** 4`.
3. Iterate through `nums`.
    - For each number, update `max1` and `max2` if it is the largest seen number thus far, or just `max2` if it is the second largest seen number thus far.
    - For each number, update `min1` and `min2` if it is the smallest seen number thus far, or just `min2` if it is the second smallest seen number thus far.
4. Return the requeted difference.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the list once and perform a fixed number of constant time operations on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize a constant amount of space to store the two largest and two smallest numbers in the list.

## Code
```python
class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        max1 = max2 = 0
        min1 = min2 = 10 ** 4 + 1

        for num in nums:
            if num > max1:
                max1, max2 = num, max1
            elif num > max2:
                max2 = num
            if num < min1:
                min1, min2 = num, min1
            elif num < min2:
                min2 = num
        
        return (max1 * max2) - (min1 * min2)
```