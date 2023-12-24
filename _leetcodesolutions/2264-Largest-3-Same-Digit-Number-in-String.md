---
title: "2264 Largest 3-Same-Digit Number in String"
number: 2264
date: 2023-12-03
collection: leetcodesolutions
permalink: /leetcodesolutions/2264/
excerpt: Solution to [Leetcode 2264](https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/)
---
# [Problem](https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find a substring of 3 matching numbers. We need to traverse the array at least once to see every number and ensure we have found the highest of possible substrings. We need to track how many consecutive numbers that have been seen are similar and if there are three, we store this value.

## Approach
<!-- Describe your approach to solving the problem. -->
We traverse the array with a counter initialized to 1 to symbolize the current number of matching numbers in the current substring. We then iterate through while incrementing the count if the next number is the same. Once we reach three, we store the largest of identified substrings. If we find a number that is no longer the same, we reset the counter and continue incrementing.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through the string once doing a constant time operation in each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as we only store the result which has a maximum length of 3.

## Code
```python
class Solution:
    def largestGoodInteger(self, num: str) -> str:
        res = '' 
        cnt = 1
        for i in range(1, len(num)):
            if num[i] == num[i-1]:
                cnt+=1
            else:
                cnt = 1
            if cnt == 3:
                res = max(res, num[i] * 3)
                
        return res
```