---
title: "70 Climbing Stairs"
number: 70
date: 2023-11-14
collection: leetcodesolutions
permalink: /leetcodesolutions/70/
excerpt: Solution to [Leetcode 70](https://leetcode.com/problems/climbing-stairs/description/)
---
# [Problem](https://leetcode.com/problems/climbing-stairs/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To reach a step, the number of ways is the sum of ways to get to either of the two previous steps. This seems like a classic DP problem where we build up our solution using a bottom-up approach.

## Approach 1
<!-- Describe your approach to solving the problem. -->
There are two approaches which build off of each other, so we'll start first with the more obvious DP solution. Each step requires the sum of each of the two steps before it so we maintain an array of length `n+1` which will keep track of each step and the number of steps required to reach it.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through each step and do a constant time operation per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we maintain a length `n+1` array for keeping track of the steps as we build up our solution.

## Code
```python
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <= 3:
            return n

        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2
        dp[3] = 3

        for i in range(4,n+1):
            dp[i] = dp[i-1] + dp[i-2]

        return dp[n]        
```

## Approach 2
<!-- Describe your approach to solving the problem. -->
We can improve on the solution by realizing that for `dp[i]`, we only need to know `dp[i-1]` and `dp[i-2]`. This means that we can continue overwriting these numbers as we build up our solution and can utilize a constant amount of space with no penalty to our time complexity.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through each step and do a constant time operation per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as we only need to maintain the current count and previous count.

## Code
```python
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """

        a = b = 1
        for _ in range(n):
            a, b = b, a + b
        return a
```