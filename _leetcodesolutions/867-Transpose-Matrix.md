---
title: "867 Transpose Matrix"
number: 867
date: 2023-12-10
collection: leetcodesolutions
permalink: /leetcodesolutions/867/
excerpt: Solution to [Leetcode 867](https://leetcode.com/problems/transpose-matrix/description/)
---
# [Problem](https://leetcode.com/problems/transpose-matrix/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is very simple as transposing a matrix can be done very neatly. We just need to initialize an array to store the transposed matrix and then begin filling it in.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a matrix with a number of rows equal to the number of columns in the original matrix and a number of columns equal to the number of rows in the original matrix.
2. Traverse through the original matrix and place each element in their transposed position.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*m)$. We iterate through each element in the array once. The array is not guaranteed to be square.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n*m)$. We create another array for storing the result of the same size as the original array.

## Code
```python
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        res = [[0]*len(matrix) for _ in range(len(matrix[0]))]

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                res[j][i] = matrix[i][j]
    
        return res
```