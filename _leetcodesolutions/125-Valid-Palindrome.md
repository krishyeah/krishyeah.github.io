---
title: "125 Valid Palindrome"
number: 125
date: 2023-11-08
collection: leetcodesolutions
permalink: /leetcodesolutions/125/
excerpt: Solution to [Leetcode 125](https://leetcode.com/problems/valid-palindrome/description/)
---
# [Problem](https://leetcode.com/problems/valid-palindrome/description/)

# Solution 1

## Approach 1
1. We create an array of all alphanumeric characters with each being lowered.
2. We check if the array is the same forwards and backwards and return this result.

## Complexity
- Time complexity:
$O(n)$ for the array approach.
- Space complexity:
$O(n)$ as we save the string in stack for the comparison.

## Code
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        ns = [char.lower() for char in s if char.isalnum()]
        return ns == ns[::-1]
```

# Solution 2

## Approach 2
1. We use a two pointers while skipping over non-alphanumeric characters and checking if each character is the same.
2. We continue until the pointers meet/cross or go over the bounds for the edge cases.
3. We return true if characters are the same while checking, otherwise false.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ for both approaches as they both involve a single loop through the string with constant time operations for each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize no extra space in the two pointer approach.

## Code
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        L = 0
        R = len(s) - 1

        while L < R and L >= 0 and R < len(s):
            while not s.lower()[L].isalnum():
                if L > len(s) or L >= R:
                    return True
                L += 1
            while not s.lower()[R].isalnum():
                if R <= 0 or R <= L:
                    return True
                R -= 1
            if s.lower()[L] != s.lower()[R]:
                return False
            L += 1
            R -= 1
        return True
```