---
title: "36 Valid Sudoku"
number: 36
date: 2023-12-12
collection: leetcodesolutions
permalink: /leetcodesolutions/36/
excerpt: Solution to [Leetcode 36](https://leetcode.com/problems/valid-sudoku/description/)
---
# [Problem](https://leetcode.com/problems/valid-sudoku/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Finding whether a given board is a valid sudoku board has a very intuitive solution. While we iterate through each number in the board, we check the rows and columns of the board as well as the grid that it is in. This however results in checking $81*8*8*8=41472$ constant-time operations! We can do better by storing in a quick look-up data structure the numbers we have seen previously in each row, column, and grid. This would now result in $81*3*3*3=729$ constant time operations. The cost comes in the form of additional memory space utilized to store the previously seen numbers; however, the performance improvements are huge.
 
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize three dictionaries that will contain a mapping of the `key` being the row, column, or grid space that each number is in. The `value` will be a set which will allow for a quick $O(1)$ lookup for the previous values and $O(1)$ addition of the current value.
2. Iterate through each `row` and `col` to search every position of the board.
3. If the current `num` has been seen in the same `row`, `col`, or `grid`, return `False` as we do not have a valid sudoku.
4. If `num` has not been seen before in the current `row`, `col`, or `grid`, we add it to the respective dictionary.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n^2)$. This solution can be extended for a larger $n*n$ grid and as we do constant time operations that are proportional to the size of the grid, there is a quadratic time complexity to the length of a side of the grid. Because sudoku is typically done with only a 9x9 grid, this can also be considered $O(1)$ as there will be a static number of computations done.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n*n)$. This complexity follows the same reasoning as the previous one. If we consider that sudoku has a constant grid size, it can also be argued that we are doing constant space utilization.

## Code
```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        grid = defaultdict(set)

        for row in range(len(board)):
            for col in range(len(board[0])):
                if board[row][col] != '.':
                    num = board[row][col]
                    if num in rows[row]:
                        return False
                    if num in cols[col]:
                        return False
                    if num in grid[(row // 3, col // 3)]:
                        return False
                    rows[row].add(num)
                    cols[col].add(num)
                    grid[(row // 3, col // 3)].add(num)

        return True
```