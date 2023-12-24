---
title: "1496 Path Crossing"
number: 1496
date: 2023-12-23
collection: leetcodesolutions
permalink: /leetcodesolutions/1496/
excerpt: Solution to [Leetcode 1496](https://leetcode.com/problems/path-crossing/description/)
---
# [Problem](https://leetcode.com/problems/path-crossing/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to trace a given path and identify if there are any intersections through the course of the path and return `true` if an intersection exists and `false` if no intersection exists.

The path can only move 1 unit at a time in a cardinal direction which makes this process a lot easier. We can simply keep track of each point that we have visited and then check to see if we visit it again. Using a hashset for this allows for quick look-up and makes our solution faster. 

We start off at coordinates `(0,0)` and increment our x- or y-coordinate value as necessary based on the next move that our path takes us on. We store the coordinates as a tuple inside of a set, because a list is not hashable and therefore will not work for our needs.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our x- and y-coordinates, `x_pos` and `y_pos`, to `0`'s.
2. Create a hashset, `visited`, for tracking which cooridinates we have previously visited.
3. Add our initial position to `visited`.
4. Iterate through each `move` character in the string `path`.
5. Update our position based on the `move` that we make. Check if this new position was previously reached and return `True` if so. Add the current position to `visited`.
6. Return `False` if there are no repeated positions after looping through every `move` in `path`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We loop iterate the entire string once and perform constant time operations during each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize space to keep track of each position that is reached.

## Code
```python
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x_pos = y_pos = 0

        visited = set()
        visited.add((x_pos, y_pos))

        for move in path:
            if move == 'N':
                y_pos += 1
                if (x_pos, y_pos) in visited:
                    return True
                visited.add((x_pos, y_pos))
            if move == 'S':
                y_pos -= 1
                if (x_pos, y_pos) in visited:
                    return True
                visited.add((x_pos, y_pos))
            if move == 'E':
                x_pos += 1
                if (x_pos, y_pos) in visited:
                    return True
                visited.add((x_pos, y_pos))
            if move == 'W':
                x_pos -= 1
                if (x_pos, y_pos) in visited:
                    return True
                visited.add((x_pos, y_pos))
        
        return False
```