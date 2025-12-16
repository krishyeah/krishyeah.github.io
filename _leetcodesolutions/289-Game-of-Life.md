---
title: "289 Game of Life"
number: 289
date: 2025-12-10
collection: leetcodesolutions
permalink: /leetcodesolutions/289/
excerpt: Solution to [Leetcode 289](https://leetcode.com/problems/game-of-life/description/)
---
# [Problem](https://leetcode.com/problems/game-of-life/description/)

# Solution 

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the next sequence in Conway's game of life. The rules of the game are explained in the problem and can also be found on Wikipedia so for brevity, I will not include them here.

Solving this is fairly trivial if we create a copy of the board. We would simply check the values of the neighbors of each grid square and update the board. Without using a copy, we need to think a little bit more about how to ensure that when we update each grid square, when it is called on in the future, we do not use its updated value, but rather the original value.

There are many ways of storing this information, one such way is described below. If we think about the rules and when a cell would either stay alive or become alive, there are only three states:
1. The cell is alive and two neighbors are alive,
2. The cell is alive and three neighbors are alive, and
3. The cell is dead and three neighbors are alive

Let's call a given cell `cell_0`. `cell_0` has 8 neighbors and we need a way to condense the information of its neighbors into the data stored by `cell_0`. We can do this by taking the value of its neighbors, multiplying it by 10, and then adding to the current value of `cell_0`. Taking the three cases above, a cell would be alive if after processing, its value was either:
1. 21,
2. 31, or
3. 30

As an example:
```
1 1
1 0

// after processing becomes

21 21
21 30

// this then creates the updated state of
1 1
1 1
```
Because we are adding multiples of 10, we ensure that the last digit always corresponds to the previous state of the cell so we are using the original state for processing future values as opposed to using the updated state. When using a cell for processing, we ensure that we take it's value mod 10 to maintain using only the last digit.

## Approach
<!-- Describe your approach to solving the problem. -->
1. For each cell, `cell_0` in `board` find the value mod 10 of its neighbors if the cell exists and add that to the current value of `cell_0`.
2. After all cells have been processed, iterate over the board again and upate the value of each cell, `cell_0`, in `board` by setting the value to `1` if the current value is `21`, `30`, or `31`. Set the value to `0` otherwise. 

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(M*N)$. We iterate over the whole board twice and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We modify the board in-place so we do not utilize additional memory.

## Code
```python3 []
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        ROWS = len(board)
        COLS = len(board[0])

        for row in range(ROWS):
            for col in range(COLS):
                if row - 1 >= 0 and col - 1 >= 0:
                    board[row][col] += 10 * (board[row - 1][col - 1] % 10)
                if row - 1 >= 0:
                    board[row][col] += 10 * (board[row - 1][col] % 10)
                if row - 1 >= 0 and col + 1 < COLS:
                    board[row][col] += 10 * (board[row - 1][col + 1] % 10)
                if col - 1 >= 0:
                    board[row][col] += 10 * (board[row][col - 1] % 10)
                if col + 1 < COLS:
                    board[row][col] += 10 * (board[row][col + 1] % 10)
                if row + 1 < ROWS and col - 1 >= 0:
                    board[row][col] += 10 * (board[row + 1][col - 1] % 10)
                if row + 1 < ROWS:
                    board[row][col] += 10 * (board[row + 1][col] % 10)
                if row + 1 < ROWS and col + 1 < COLS:
                    board[row][col] += 10 * (board[row + 1][col + 1] % 10)

        for row in range(ROWS):
            for col in range(COLS):
                if board[row][col] >= 21 and board[row][col] <= 31:
                    board[row][col] = 1
                else:
                    board[row][col] = 0

```