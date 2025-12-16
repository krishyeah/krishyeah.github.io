---
title: "3531 Count Covered Buildings"
number: 3531
date: 2025-12-11
collection: leetcodesolutions
permalink: /leetcodesolutions/3531/
excerpt: Solution to [Leetcode 3531](https://leetcode.com/problems/count-covered-buildings/description/)
---
# [Problem](https://leetcode.com/problems/count-covered-buildings/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find which buildings are "covered". A "covered" building is one that has a building above, below, to the left, and to the right of it. Each building is on an x-y grid with coordinates so we want to check the grid for building above and below each one.

There are a few observations that make the intuition for this problem fairly simple.
1. Each building is either "covered", or on some "edge" (The building may not necessarily be on the edge, but it MUST be highest or lowest in that column or left-most or right-most in that row). 
2. Each "covered" building is necessarily between buildings that are on the "edges". They MAY also be between other covered buildings, but they MUST be between buildings on the "edges" (again we use the same definition of "edge" as above).

These observations then make the problem fairly easy to solve. We can iterate through each building and calculate the edges for each row and column. We want to know the left-most and right-most values for each row, and the top-most and bottom-most values for each column. Once we have our borders, we simply iterate through each building and check to see whether they are within the borders, if so, they must be covered.
  
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize dictionaries for storing the min and max values for each column and row. The `x_borders` stores the left-most and right-most values for each row. The y-value of the building will define it's row. The `y_borders` stores the top-most and bottom-most values for each column. The x-value of the building will define it's column.
2. For each building, update the minimum and maximum of it's row and it's column based on the current x and y value of the building.
3. Re-iterate through each building and check to see if the current building is within the previously calculated borders, if so, increment our counter for covered buildings.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(M)$. We iterate through each building twice and perform constant time operations for each building. _Note: $N$ is given as the size of the grid, but our code scales on number of buildings, $M$, not the size of the grid, $N$. We iterate through each building as opposed to iterating through each row and column._
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(N)$. We use additional space to store the min and max of each row and column. This scales on the size of the grid as we may have minimum and maximum values for each row and column in the grid. 

## Code
```python3 []
class Solution:
    def countCoveredBuildings(self, n: int, buildings: List[List[int]]) -> int:
        x_borders = {}
        y_borders = {}

        for building in buildings:
            cur_x = building[0]
            cur_y = building[1]
            if cur_x in y_borders:
                y_borders[cur_x][0] = min(y_borders[cur_x][0], cur_y)
                y_borders[cur_x][1] = max(y_borders[cur_x][1], cur_y)
            else:
                y_borders[cur_x] = [cur_y]
                y_borders[cur_x].append(cur_y)
            if building[1] in x_borders:
                x_borders[cur_y][0] = min(x_borders[cur_y][0], cur_x)
                x_borders[cur_y][1] = max(x_borders[cur_y][1], cur_x)
            else:
                x_borders[cur_y] = [cur_x]
                x_borders[cur_y].append(cur_x)

        res = 0
        for building in buildings:
            cur_x = building[0]
            cur_y = building[1]

            if (
                cur_x > x_borders[cur_y][0] and
                cur_x < x_borders[cur_y][1] and
                cur_y > y_borders[cur_x][0] and
                cur_y < y_borders[cur_x][1]):
                res += 1

        return res
```