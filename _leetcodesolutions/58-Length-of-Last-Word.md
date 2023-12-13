---
title: "58 Length of Last Word"
number: 58
date: 2023-11-10
collection: leetcodesolutions
permalink: /leetcodesolutions/58/
excerpt: Solution to [Leetcode 58](https://leetcode.com/problems/length-of-last-word/description/)
---
# [Problem](https://leetcode.com/problems/length-of-last-word/description/)

# Solution 1

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires finding the last word and finding its length. We can use Python in order to efficiently manipulate the string to find the last word.

## Approach
The first approach is to use in-built python functions to strip the trailing spaces, split the words by the space character, and then find the length of the last word in the list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ time complexity as the entire string is manipulated.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ as Python creates a list after the call to split which is used for finding the last word. Even though this is not saved as a variable, it will take space in the stack. 

## Code
```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split(' ')[-1])
```

# Solution 2

## Intuition
We can use a two pointer approach in order to find the start and end of the last word for an easy scanning approach.

## Approach
The second approach is to decrement a pointer from the end until the last letter of the last word is reached, and then continue counting the length until a space character is reached.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as the iteration can take up the entire length of the string.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as no additional data structures are created.

## Code
```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.strip().split(' ')[-1])
```

## Approach 2 Code
```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        P = len(s) - 1
        res = 0

        while P >= 0 and s[P] == ' ':
            P -= 1
        while P >= 0 and s[P] != ' ':
            P -= 1
            res += 1
        return res
```