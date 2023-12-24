---
title: "1266 Minimum Time Visiting All Points"
number: 1266
date: 2023-12-04
collection: leetcodesolutions
permalink: /leetcodesolutions/1266/
excerpt: Solution to [Leetcode 1266](https://leetcode.com/problems/minimum-time-visiting-all-points/description/)
---
# [Problem](https://leetcode.com/problems/minimum-time-visiting-all-points/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is quite simple and requires us to find the minimum amount of time needed to traverse the points in the given order. This requires a simple math trick to easily calculate as we can move vertically, horizontally, and diagonally.

## Approach
<!-- Describe your approach to solving the problem. -->
For each point, calculate the maximum of the absolute vertical and horizontal difference between the previous point's coordinates and add that to the result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the points once doing a constant time operation during each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not use any additional space.

## Code
```python
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        res = 0

        for i in range(1, len(points)):
            res += max(abs(points[i][0] - points[i-1][0]), abs(points[i][1] - points[i-1][1]))
        return res
```