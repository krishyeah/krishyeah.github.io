---
title: "387 First Unique Character in a String"
number: 387
date: 2023-02-04
collection: leetcodesolutions
permalink: /leetcodesolutions/387/
excerpt: Solution to [Leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/description/)
---
# [Problem](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the index of the first non-repeating character or -1 if there is no non-repeating character. This problem is fairly straightforward as we can keep track of whether a character has been seen before and then return the smallest index from all unique characters.

We utilize a dictionary and update the index for when the character is first seen, if the character has been seen, we update its value to be out of the range of lengths so that we can return the lowest value after iterating through all characters in the string.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a dictionary, `characters`, for keeping track of the indices of all characters.
2. Iterate through all characters and update the first index of each character in our dictionary. If the character has been previously seen, we update its value to be out of bounds.
3. We then return the minimum of all values in the list, unless all values are the out of bounds value in which case we return `-1`.


## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through all characters in the string once and then iterate through all values in the dictionary. The dictionary has a constant length since its length is bounded by the fixed size of lowercase characters, i.e.: 26. $O(n) + O(1) \rightarrow O(n)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize a dictionary for storing the indices; however, the size of this dictionary is bound by fixed length of the number of lowercase characters.

## Code
```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        characters = {}

        for i, c in enumerate(s):
            if c in characters:
                characters[c] = 10 ** 5 + 1
            else:
                characters[c] = i

        values = characters.values()

        return min(values) if min(values) != 10 ** 5 + 1 else -1
```