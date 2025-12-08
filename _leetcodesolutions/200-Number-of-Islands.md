---
title: "200 Number of Islands"
number: 200
date: 2025-12-03
collection: leetcodesolutions
permalink: /leetcodesolutions/200/
excerpt: Solution to [Leetcode 200](https://leetcode.com/problems/number-of-islands/description/)
---
# [Problem](https://leetcode.com/problems/number-of-islands/description/)

# Solution 

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to look at a matrix of `1`'s and `0`'s and determine how many total islands there are in the matrix. An island is defined as any set of `1`'s that are connected in the orthogonal directions.

To build intuition for this problem, let's think about how we would solve the problem if someone gave us a paper with `1`'s and `0`'s and asked us to find the number of islands that it had. Essentially we would just be scanning across the map, counting how many interconnected set's of `1`'s there were and add that to our result. We would skip over islands that we had previously encountered and systematically work our way through the entire map. This is essentially what we intend do to with this solution. We utilize a depth-first search algorithm so that when we encounter an island, we can ensure that we can track that it has previously been seen in case we run into it again while scanning through the entire matrix.

We basically will scan through the entire matrix, if we encounter a `1`, we run a DFS algorithm to find all of its island neighbors, and then track that they have been seen, and continue iterating through the matrix.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our result variable `num_islands` to zero.
2. Iterate through the entire matrix.
3. If we encounter a `1`, we increment our `num_islands`, we set it's value to `0`, and we recursively search it's neighboring `1`'s.
4. We return our final `num_islands` value.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(M*N)$. For our DFS, we iterate through each neighbor, but because we set the value to zero, we only run DFS on each item in the matrix once. Thus, we will iterate at max twice over each item in the matrix.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(M*N)$. Our maximum stack size for DFS can be the entire array which would require $O(M*N)$ space.

## Code
```python3 []
class Solution:
    def numIslands(self, grid):
        if not grid:
            return 0

        num_islands = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1":
                    self.dfs(grid, i, j)
                    num_islands += 1

        return num_islands

    def dfs(self, grid, r, c):
        if (
            r < 0
            or c < 0
            or r >= len(grid)
            or c >= len(grid[0])
            or grid[r][c] != "1"
        ):
            return
            
        grid[r][c] = "0"

        self.dfs(grid, r - 1, c)
        self.dfs(grid, r + 1, c)
        self.dfs(grid, r, c - 1)
        self.dfs(grid, r, c + 1)
```