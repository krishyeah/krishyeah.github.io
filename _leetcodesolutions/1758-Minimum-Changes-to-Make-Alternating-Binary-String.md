---
title: "1758 Minimum Changes to Make Alternating Binary String"
number: 1758
date: 2023-12-23
collection: leetcodesolutions
permalink: /leetcodesolutions/1758/
excerpt: Solution to [Leetcode 1758](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/)
---
# [Problem](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is quite simple. It is asking us to find the total number of operations required to make a binary string alternating (i.e.: the entire string contains alternating `1`'s and `0`'s).

There are two strings which we can have. Either starting with `0` or starting with `1`. We can assume a start of either, and then count the number of characters which are correct. We then return the less of the number of bits that we must flip in order to make this string alternating, or the length of the string minus the number of bits we must flip for a start of the opposite number. This is predicated on the simple fact that bits which are correct for the start of one number, are incorrect for the start of the other number. Therefore, by counting the number of correct bits, we have the number of bits we must flip, or the number of bits which remain and do not get flipped.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a counter for tracking the number of bits that we must flip if we assume a start of `0`. I call this `even_0` to show this is the number of flips we must make to make all the even indices contain 0.
2. Iterate through all bits in the string. For each iteration, if we are at an even index, check if the current bit is `1`. If so, increment our counter as it will need to be flipped. If the current index is odd, check if the current bit is `0` and increment our counter if so as it will need to be flipped.
3. Return the lesser of the number of bits which must be flipped for a `0` start and the number of bits which must be flipped for a `1` start.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the string once, performing constant time operations at each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We use only 1 variable for tracking the number of bits that must be flipped.

## Code
```python
class Solution:
    def minOperations(self, s: str) -> int:
        even_0 = 0
        
        for i in range(len(s)):
            if i % 2 == 0:
                if s[i] == "1":
                    even_0 += 1
            else:
                if s[i] == "0":
                    even_0 += 1
        
        return min(even_0, len(s) - even_0)
```