---
title: "1903 Largest Odd Number in String"
number: 1903
date: 2023-12-07
collection: leetcodesolutions
permalink: /leetcodesolutions/1903/
excerpt: Solution to [Leetcode 1903](https://leetcode.com/problems/largest-odd-number-in-string/description/)
---
# [Problem](https://leetcode.com/problems/largest-odd-number-in-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the largest odd number from a string that does not contain any leading zeros. Not containing leading zeros is actually very helpful as the largest possible odd number will start at the first number and go until the rightmost odd number in the string. Knowing this, we can iterate backwards from the right in the string and once we find the first odd number from the right, return the string from the first number until the first odd number from the right.

For example, if we have `1664388`, we iterate backwards until we find the `3`, and then return the entire string to that point, i.e.: `16643` as the largest odd number will have the most possible digits.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate from the right until the rightmost odd number is found
2. Return from the beginning of the string until the rightmost odd number.
3. Return an empty string if only even numbers are found.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire string once.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We don't utilize any significant space for the solution.

## Code
```python
class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num)-1, -1, -1):
            if num[i] in '13579':
                return num[:i+1]
        
        return ''
```