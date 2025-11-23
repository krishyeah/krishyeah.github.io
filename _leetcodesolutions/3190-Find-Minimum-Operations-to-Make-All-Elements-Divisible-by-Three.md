---
title: "3190 Find Minimum Operations to Make All Elements Divisible by Three"
number: 3190
date: 2025-11-22
collection: leetcodesolutions
permalink: /leetcodesolutions/3190/
excerpt: Solution to [Leetcode 3190](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/)
---
# [Problem](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to perform operations on each number in a list of numbers to make each number divisible by 3. The operations that we can perform are adding or subtracting 1 from each number. We can perform this operation as many times as necessary in order to set each number to being divisible by 3.

Because we are looking for a number divisible by 3, there are only 3 cases to consider.
1. The number is already divisible by 3 and requires 0 operations.
2. The number is 1 greater than a multiple of 3 and requires 1 subtraction operation.
3. The number is 2 greater than a multiple fo 3 and requires 2 subtraction operations.

For the last case however, we can understand that if a number is 2 greater than a multiple of 3 it must also be 1 less than a multiple of three. Thus we can re-write our rules as follows:
1. The number is already divisible by 3 and requires 0 operations.
2. The number is 1 greater than a multiple of 3 and requires 1 subtraction operation.
3. The number is 2 greater than a multiple fo 3 and requires 1 addition operation.

Therefore, we have found our solution for the minimum number of operations. If the number is not divisible by 3, we simply increment our counter of operations.

## Approach
<!-- Describe your approach to solving the problem. -->
1. For each `num` in `nums`. If `num` is not divisible by 3, increment our counter `res`.
2. Return `res` when we have traversed through each number in `nums`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the full list and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our return variable.

## Code
```python3 []
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        res = 0

        for num in nums:
            if num % 3 != 0:
                res += 1
        
        return res
```