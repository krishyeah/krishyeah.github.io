---
title: "2864 Maximum Odd Binary Number"
number: 2864
date: 2024-03-01
collection: leetcodesolutions
permalink: /leetcodesolutions/2864/
excerpt: Solution to [Leetcode 2864](https://leetcode.com/problems/maximum-odd-binary-number/description/)
---
# [Problem](https://leetcode.com/problems/maximum-odd-binary-number/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the maximum possible odd binary number in a string format given a string representation of a binary number guaranteed to have at least one `1` character.

Breaking this problem down, for the maximum possible number, we know that we want to put all of the `1`'s in the front, and then pad the right side with all of the remaining `0`'s. This will give us a string representation of the largest possible binary number out of the provided numbers. However, we want the number to be odd as well, so we want the least significant bit to be `1`.

To do this, we can count the total number of `0`'s and `1`'s and store them in variables or an array called `counts`. `counts[0]` will contain the number of `0`'s while `count[1]` will contain the number of `1`'s. We can place `count[1] - 1` `1`'s to the left, pad by `count[0]` `0`'s, and then place our last `1` at the right-most place. This would be similar to sorting the digits to move all `1`'s to the front, and then moving one of the `1`'s to the right to make the number odd. By creating the string using `counts` instead of sorting, we improve our runtime by having an $O(n)$ runtime as opposed to $O(n*\log(n))$.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our `counts` array which will store the count of `1`'s and `0`'s.
2. Count the number of `1`'s and `0`'s in the string.
3. Initialize our resultant string `res` as an empty string
4. Place `count[1] - 1` `1`'s at the front of the string followed by `count[0]` `0`'s. Then place our final `1` at the end of the string.
5. Return this result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the string once and perform constant time operations on each iteration and then iterate through each character while creating the resultant string.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ if we do not include the resultant string space. $O(n)$ if we include the resultant string space. The `counts` array uses constant space.

## Code
```python
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        counts = [0, 0]

        for c in s:
            if c == '1':
                counts[1] += 1
            else:
                counts[0] += 1
        
        res = ''
        for _ in range(counts[1] - 1):
            res += '1'
        for _ in range(counts[0]):
            res += '0'
        
        return res + '1'
```