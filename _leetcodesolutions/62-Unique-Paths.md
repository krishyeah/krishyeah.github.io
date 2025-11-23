---
title: "62 Unique Paths"
number: 62
date: 2025-11-18
collection: leetcodesolutions
permalink: /leetcodesolutions/62/
excerpt: Solution to [Leetcode 62](https://leetcode.com/problems/unique-paths/description/)
---
# [Problem](https://leetcode.com/problems/unique-paths/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to compute the number of paths for a robot to reach the bottom right corner of a grid given that is starts at the top left and can only move downwards or rightwards.

For this problem, if we were at the last step, there are only two immediate routes that we could have taken. We either came from above, or the left. Because these are the only ways the robot can move, this leaves us to realize that at every square, the number of paths to get to that square are the sum of the paths to get to the squares directly above or to the left of the current square.

This is a classic Dynamic Programming problem and we can solve it as such.

We can simply build up our solution by calculating the number of paths in the preceding two squares. Our boundary condition is that if you are the top row or the leftmost column, there is only one path to reach this square as you would have had to continue to walk either directly to the right or directly down in order to reach that square. We can therefore place `1`'s for our answer in these squares and then use those to build up our solution for all of the other squares.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an array to track the number of paths to reach each square. We initialize to 1 as we will be overwriting every value apart from the top row and left column which are set to 1.
2. Starting from the second row and starting from the second column, for each square, the number of paths to reach the square is the sum of the number of paths to reach the square directly above and directly to the right of the square.
3. Return the bottom right corner of our matrix which corresponds to the number of paths to reach the bottom right of the problem matrix.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(M*N)$. We iterate through the entire `m * n` array and perform constant time operations on each step.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(M*N)$. We utilize additional space for creating the `m * n` matrix to track our solution.

## Code
```python3 []
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[1] * n for _ in range(m)]

        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

        return dp[m - 1][n - 1]
```