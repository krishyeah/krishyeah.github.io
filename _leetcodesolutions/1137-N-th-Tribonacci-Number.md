---
title: "1137 N-th Tribonacci Number"
number: 1137
date: 2024-04-24
collection: leetcodesolutions
permalink: /leetcodesolutions/1160/
excerpt: Solution to [Leetcode 1160](https://leetcode.com/problems/n-th-tribonacci-number/description/)
---
# [Problem](https://leetcode.com/problems/n-th-tribonacci-number/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the `n`th Tribonacci number. This problem can be solved similarly to returning the `n`th Fibonacci number. We can use DP, but would realize that instead of building up the solution, we only need to recall the last three numbers and therefore do not need to create an entire array while building up our solution. We can therefore utilize constant space and simply utilize a `for` loop in order to calculate our solution.

We utilize three variables intialized such that `a` is the 0th number, `b` is the 1st number, and `c` is the 2nd number of the Tribonacci sequence. We can then simply update `c` to be the sum of `a`, `b`, and `c` and then update `b` to become `c` and `a` to become `b`. By sliding our relevant window across we can continue to build up this solution to our final answer and we can return `c` corresponding to the `n`th Tribonacci number.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Consider the base cases if `n` is less than or equal to 2.
2. Initialize our variables which will keep track of the latest three numbers of the sequence.
3. Create a for loop that will iterate `n-2` times since we already have the 2nd Tribonacci number stored in `c`. Find the next Tribonacci number and update our window of relevant numbers by updating all of the variables.
4. Return `c`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a for loop that dominates our runtime and uses linear time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We only use three variables for a constant space complexity.

## Code
```python
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        if n <= 2:
            return 1

        a, b, c = 0, 1, 1

        for _ in range(2,n):
            c, b, a = a + b + c, c, b
        
        return c
```