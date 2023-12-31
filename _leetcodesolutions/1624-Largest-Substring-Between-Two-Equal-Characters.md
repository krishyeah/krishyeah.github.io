---
title: "1624 Largest Substring Between Two Equal Characters"
number: 1624
date: 2023-12-30
collection: leetcodesolutions
permalink: /leetcodesolutions/1624/
excerpt: Solution to [Leetcode 1624](https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/)
---
# [Problem](https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the longest space between two of the same characters in a string. This is a fairly simple problem as we can simply keep track of each character's first occurence and then check the length against future occurences of the same letter.

We use a hashmap, `first_position`, to keep track of each character's first occurence. We then iterate through each remaining character and store the first occurence of each character, while comparing the next instances and retaining the maximum number of characters between two of the same characters.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `result` to be -1 for the edge case in which there are no repeating characters in `s`.
2. Create `first_position`, a hashmap, to store the first occurence of each character
3. Iterate through each character in `s`. If it is the first time we are seeing the character, store its position in the hashmap, if it is not the first time we are seeing the character, check the number of characters between its first instance and the current instance and store the `result` if it is the maximum.
4. Return the `result`

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each character in `s` and perform a constant time operation on each iteration, so the result is linearly proportional to the input.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. The maximum size of the space used is limited by the number of characters in the alphabet, so we only use constant space.

## Code
```python
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        string_length = len(s)

        result = -1
        first_position = {}

        for i in range(string_length):
            if s[i] in first_position:
                result = max(result, i - first_position[s[i]] - 1)
            else:
                first_position[s[i]] = i
        return result
```