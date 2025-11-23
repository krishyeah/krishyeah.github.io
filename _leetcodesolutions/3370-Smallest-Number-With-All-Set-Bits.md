---
title: "3370 Smallest Number With All Set Bits"
number: 3370
date: 2025-10-29
collection: leetcodesolutions
permalink: /leetcodesolutions/3370/
excerpt: Solution to [Leetcode 3370](https://leetcode.com/problems/smallest-number-with-all-set-bits/description/)
---
# [Problem](https://leetcode.com/problems/smallest-number-with-all-set-bits/description/)

# Solution 
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the smallest number with all set bits (`1` bits in digits of the binary number) that is equal to or greater than the given number `n`. In order to find this, the smallest number greater than or equal to `n` with all `1`'s in binary representation will have the same number of digits in a binary representation, but they will all need to be `1`'s.

This is fairly easy to solve as we can simply find the number of digits in the binary representation of the given number, raise that to the power of 2 to get the smallest power of `2` that is greater than the number, and subtract `1` in order to set all of the bits to `1` while maintaining a greater than or equal to condition.

An example to map out how this works:
1. Given number is `5`. Binary representation is `101`.
2. Three digits in the binary representation. $2^3=8$. Binary representation of `8` is `1000`.
3. Subtract one to get `7`. Binary representation is `111`.
4. Return `7`.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Find the binary representation of the given number, `n`.
2. Find the length of the binary representation.
3. Raise `2` to the power of the length.
4. Subtract `1` to set digits to `1`'s. 
5. Return the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(1)$. This is a constant time calculation as the conversions to binary and calculations are all constant time solutions.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```python3 []
class Solution:
    def smallestNumber(self, n: int) -> int:
        return 2**len(f'{n:b}')-1
```