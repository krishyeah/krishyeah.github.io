---
title: "2785 Sort Vowels in a String"
number: 2785
date: 2023-11-13
collection: leetcodesolutions
permalink: /leetcodesolutions/2785/
excerpt: Solution to [Leetcode 2785](https://leetcode.com/problems/sort-vowels-in-a-string/description/)
---
# [Problem](https://leetcode.com/problems/sort-vowels-in-a-string/description/)

# Solution

## Intuition

<!-- Describe your first thoughts on how to solve this problem. -->
This problem calls for sorting the vowels in a string by their ASCII value and replacing the vowels in sorted order with consontant placements unchanged.

## Approach

<!-- Describe your approach to solving the problem. -->
This problem is fairly easily solved with the following algorithm:
1. Store all vowels within the original string
2. Sort the vowels by their ASCII value
3. Iterate through the original string and replace any vowel occurence with the next unused sorted vowel.

## Complexity

- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*log(n))$ time complexity as we loop through the string twice and perform constant time operations in each iteration of the loop; however, we sort all vowels which takes $O(n*log(n))$ using Python's `sort`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we store all vowels for sorting and also create a new string to return as the result.

## Code

```python
class Solution:
    def sortVowels(self, s: str) -> str:
        vowels = set(['a','e','i','o','u','A','E','I','O','U'])
        t = []
        listvowels = []

        for c in s:
            if c in vowels:
                listvowels.append(c)

        count = 0
        listvowels = sorted(listvowels)

        for i in range(len(s)):
            if s[i] in vowels:
                t.append(listvowels[count])
                count += 1
            else:
                t.append(s[i])

        return "".join(t)
```