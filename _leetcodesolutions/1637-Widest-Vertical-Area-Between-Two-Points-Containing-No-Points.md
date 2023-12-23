---
title: "1637 Widest Vertical Area Between Two Points Containing No Points"
number: 1637
date: 2023-12-21
collection: leetcodesolutions
permalink: /leetcodesolutions/1637/
excerpt: Solution to [Leetcode 1637](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/)
---
# [Problem](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the widest vertical area such that the distance between two x-coordinates is the largest and no other points are included in the area, and only on the edges.

This is quite a simple problem as we can discard the y-coordinates from the beginning. We are looking for the widest vertical area so we only want to maximize the distance between two x-coordinates. We can do this easily by iterating through all of the points, and storing each of the x-coordinates that we see. We can then order those x-coordinates to compare the distance between each adjacent pair. We store the maximum distance between two adjacent x-coordinates and return this solution.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a set, `unique_x`, to store the unique x-coordinates that we see
2. Iterate through `points` and for each `point`, add the x-coordinate to `unique_x`.
3. Sort the x-coordinates and put them in a list, `x_coords`, to iterate through. 
4. Find the largest distance between two adjacent points in `x_coords` and return this result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*log(n))$. We iterate through all points to store the x-coordinates, sort the unique x-coordinates, and then iterate through the sorted list to find the largest distance between two adjacent points. $O(n) + O(n*log(n)) + O(n) \rightarrow O(n*log(n))$. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store the unique x-coordinates which takes at worst $O(n)$ space.

## Code
```python
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        unique_x = set()

        for point in points:
            unique_x.add(point[0])
        
        x_coords = list(unique_x)

        x_coords.sort()

        res = 0
        for i in range(1, len(x_coords)):
            res = max(res, x_coords[i] - x_coords[i-1])
        
        return res
```