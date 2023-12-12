---
title: "1759 Count Number of Homogenous Substrings"
number: 1759
date: 2023-11-09
collection: leetcodesolutions
permalink: /leetcodesolutions/1759/
excerpt: Solution to [Leetcode 1759](https://leetcode.com/problems/count-number-of-homogenous-substrings/description/)
---
# [Problem](https://leetcode.com/problems/count-number-of-homogenous-substrings/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem first may seem like a recursive nightmare in counting the number of substrings that are part of a larger homogenous substring; however, the problem is actually a quite simple math problem.

## Approach
<!-- Describe your approach to solving the problem. -->
If you know the max length of any homogenous substring, you can add each one using a common formula that is used for counting numbers between $1$ and $n$. Any homogenous subtring of length $n$ has 1 substring of length $n$, 2 substrings of length $n-1$, 3 substrings of length $n-2$ etc. We therefore need to add up numbers from 1 to $n$ which has a simple formula of $n * (n + 1) / 2$.
The algorithm is as follows:
1. Set a left and right pointer at the start of the string
2. While the right pointer is within string bounds iterate the pointer
3. If the right pointer is equal to the left pointer, we are still on a homogenous substring. Else, we have ended the homogenous substring and use our formula to add up numbers between 1 and length of the current substring which we find by subtracting R and L.
4. We have one last call to the count function outside of the while loop as the last substring will otherwise not get added.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ time complexity as we have 1 loop of size $n$ with a constant time operation in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ space complexity as we only store the result variable.

## Code
```python
class Solution:
    def countHomogenous(self, s: str) -> int:
        res = 0

        def count(n: int) -> int:
            return n * (n + 1) / 2

        L = 0
        R = 0

        while R < len(s):
            if s[R] == s[L]:
                R += 1
            else:
                res += count(R - L) % (10 ** 9 + 7)
                L = R
                R += 1

        res += count(R - L)
        return int(res % (10 ** 9 + 7))
```