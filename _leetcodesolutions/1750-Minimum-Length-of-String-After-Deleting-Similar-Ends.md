---
title: "1750 Minimum Length of String After Deleting Similar Ends"
number: 1750
date: 2024-03-04
collection: leetcodesolutions
permalink: /leetcodesolutions/1750/
excerpt: Solution to [Leetcode 1750](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/)
---
# [Problem](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the minimum length of a string after applying a deletion operation as many times as possible. The operation consists of finding a non-intersecting prefix and suffix of at least length 1 that contain the same letter and deleting them. Then the process can be repeated as many times until it is no longer possible to perform the operation.

The approach to do this is to use two pointers on each side of the starting string. While the first and last letters are still the same, we can find the largest prefix and suffix that have the same letters and move our pointers inwards past these characters. Then we can check again to see if there are the same characters on either side and continue removing them until it is no longer possible. We then return the number of characters between our pointers.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Intialize our pointers, `L` and `R`, which will point to the left and right side of the string respectively.
2. While the pointers have not crossed and the pointers point to the same character we move the pointers inwards while they still point to the same character. We then repeat the process for the next character that our pointers have run into.
3. Return the number of letters between the pointers when the pointers cross or point to different characters indicating that we can no longer perform any more deletion operations.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the string and perform constant time operations on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space for the solution.

## Code
```python
class Solution:
    def minimumLength(self, s: str) -> int:
        L = 0
        R = len(s) - 1

        while L < R and s[L] == s[R]:
            curr = s[L]
            L += 1
            R -= 1
            while L <= R and s[L] == curr:
                L += 1
            while R >= L and s[R] == curr:
                R -= 1

        return R - L + 1
```