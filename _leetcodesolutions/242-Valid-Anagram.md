---
title: "242 Valid Anagram"
number: 242
date: 2025-12-15
collection: leetcodesolutions
permalink: /leetcodesolutions/242/
excerpt: Solution to [Leetcode 242](https://leetcode.com/problems/valid-anagram/description/)
---
# [Problem](https://leetcode.com/problems/valid-anagram/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return whether two strings, `s` and `t` are anagrams of each other. Anagrams means they contain the same frequency of each letter, albeit the order of the letters does not matter.

To solve this simply, we can just count the number of letters in each word and if they have the same counts, we can return `True`, else we can return `False`.

We can use a hashmap for quick lookups of previously found characters and to keep track of the number of occurrences. We add to the count when iterating over the characters of string `s`, and then subtract from the count when iterating over the characters of string `t`. If the counts at the end for each character are 0, then we know we found an anagram.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check if the length of each string is equal, if they are not, we already know they are not anagrams and we can simply return `False`.
2. Initialize our dictionary for counting characters.
3. Iterate through `s`. For each character, increment it's count by 1.
4. Iterate through `t`. For each character, decrement it's count by 1. If the letter was not previously seen in our dictionary, we can return `False`.
5. Iterate through each letter previously seen and check to see if the remaining count is 0. If the count is not 0, return `False`.
6. Return `True` if all counts are 0 after the iterations.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate over both strings in order to count their letters.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We use additional space for storing counts of each letter; however, there is a fixed number of total letters so this is constant space.

## Code
```python3 []
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_counts = {}

        for c in s:
            s_counts[c] = s_counts.get(c, 0) + 1
        
        for c in t:
            if c not in s_counts:
                return False
            s_counts[c] = s_counts[c] - 1
        
        for c in s_counts:
            if s_counts[c] != 0:
                return False
            
        return True
```