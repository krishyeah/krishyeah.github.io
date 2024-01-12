---
title: "1704 Determine if String Halves Are Alike"
number: 1704
date: 2023-12-06
collection: leetcodesolutions
permalink: /leetcodesolutions/1704/
excerpt: Solution to [Leetcode 1704](https://leetcode.com/problems/determine-if-string-halves-are-alike/description/)
---
# [Problem](https://leetcode.com/problems/determine-if-string-halves-are-alike/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to check whether the first and second half of a string has the same number of vowels. This is a fairly easy problem as we can simply iterate through the two halves and compare the counts of vowels in each half.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our `vowel_counts` variable to 0.
2. Iterate through the first half of the string and increment `vowel_counts` when we come across a vowel.
3. Iterate through the second half of the string and decrement `vowel_counts` when we come across a vowel.
4. Check to see if `vowel_counts` is 0 which would indicate they have the same number of vowels and return true if the condition is met, otherwise false.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each character of `s` and perform constant work per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize a single variable which is constant in space.

## Code
```python
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowel_counts = 0

        for i in range(len(s) // 2):
            if s[i] in 'aeiouAEIOU':
                vowel_counts += 1
        
        for i in range(len(s) // 2, len(s)):
            if s[i] in 'aeiouAEIOU':
                vowel_counts -= 1
        
        return vowel_counts == 0
```