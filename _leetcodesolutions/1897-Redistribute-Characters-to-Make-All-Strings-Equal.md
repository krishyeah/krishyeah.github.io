---
title: "1897 Redistribute Characters to Make All Strings Equal"
number: 1897
date: 2023-11-20
collection: leetcodesolutions
permalink: /leetcodesolutions/1897/
excerpt: Solution to [Leetcode 1897](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/)
---
# [Problem](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether the characters from a list of words can be distributed such that each word can have the same count of each character. Basically we want to see if there is a way to rearrange all of the characters from the `word_count` number of words such that we can make a `word_count` number of anagrams with no leftover characters.

This is quite simple as we can simply count the occurences of each character and then check to see if the count of each is divisible by the number of words we need to create. We can also do a quick check to make sure the total count is divisible by the number of words first as this will save on some real performance, while not impacting the time complexity.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a dictionary, `char_counts`, to store the total counts of each character in the list `words`.
2. Store the total length of words as `word_count` for future use as this improves performance.
3. For each character, `char`, in each word, `word`, of `words`, increment the counter in the dictionary.
4. If the total count of characters is not divisible by `word_count`, we return `false` as it will be impossible to cleanly divide the characters.
5. For the count of each character in `char_count`, if the count is not divisible by `word_count` return `false`.
6. Return `true` if the previous statements did not find an impossible condition.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*k)$. We loop through each character of variable length words thus the performance is dependent on the length of each word. $O(n) * O(k) \rightarrow O(n * k)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. Our space used is limited by the total number of characters in the alphabet. We can initialize the dictionary as a fixed size array as well, thus our space used is constant.

## Code
```python
class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        char_counts = defaultdict(int)
        word_count = len(words)

        for word in words:
            for char in word:
                char_counts[char] += 1
        
        if sum(char_counts.values()) % word_count != 0:
            return False

        for count in char_counts.values():
            if count % word_count != 0:
                return False
        
        return True
```