---
title: "1980 Find Unique Binary String"
number: 1980
date: 2023-11-16
collection: leetcodesolutions
permalink: /leetcodesolutions/1980/
excerpt: Solution to [Leetcode 1980](https://leetcode.com/problems/find-unique-binary-string/description/)
---
# [Problem](https://leetcode.com/problems/find-unique-binary-string/description/)

# Solution

## Intuition

<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find a binary number that is not presented in a list of unique similar length binary numbers. To brute force the solution, we can count up numbers to the maximum possible based on the length of the binary numbers presented until we find a solution; however, there is a faster approach. 

## Approach

<!-- Describe your approach to solving the problem. -->
The approach is based on Cantor's diagonal argument. Cantor argues that there are an uncountable number of numbers in an infinite set as you can continue to create new numbers by iterating through each digit of each number and flipping a bit. For example you would look at the first bit of the first number and flip the bit, then add the flipped second bit of the second number ... etc until you have created a new number. You are guaranteed to be unique as you have at least one different bit than all numbers iterated through. His argument is presented for numbers of infinite length as with a fixed length, there are a fixed number of variations; however, since we are presented with an array that is guaranteed to have less numbers than there are possible with the number of bits given, we can use the same formula. The algorithm is as follows:

1. Read the `i`th digit of the `i`th number in the array
2. Flip the bit
3. Append it to our new number
4. Return the newly created number that is guaranteed to be unique.

## Complexity

- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through all numbers in the given array

- Space complexity:

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Even though we iteratively build up our solution, the space complexity is $O(1)$ as we are only storing the one number that is of the same size as each number in the given array.

## Code

```python
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        res = []
        for i, num in enumerate(nums):
            if num[i] == '0':
                res.append('1')
            else:
                res.append('0')
        
        return "".join(res)
```