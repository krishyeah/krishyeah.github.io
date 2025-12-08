---
title: "953 Verifying an Alien Dictionary"
number: 953
date: 2025-12-03
collection: leetcodesolutions
permalink: /leetcodesolutions/953/
excerpt: Solution to [Leetcode 953](https://leetcode.com/problems/verifying-an-alien-dictionary/description/)
---
# [Problem](https://leetcode.com/problems/verifying-an-alien-dictionary/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether a given list of words meets a lexicographical order based on an "alien" language. Essentially, we are comparing the lexicographical order based on a scrambled English alphabet.

If we think about how we would solve this problem given a regular alphabet, we would look at each word and the word directly after it and determine whether the first letters were the same or different, if they were different we would think about our alphabet and compare, if they were the same, we would look at the next word.

We can apply this exact same logic and simply create a dictionary for storing the scrambled alphabet for looking up the order of specific letters in our words.

We iterate through each word and check its neighbor (either preceeding neighbor or succeeding, I chose preceeding in my solution). We first check to see if the first word is longer AND starts with the second word. As shown in the example for this question: "apple" and "app". "apple" lexicographically should come after "app" because it starts with the same letters, but is longer. Once this first check is done, we iterate through the letters. If for any letter, the first word has a lexicographically greater letter than the second word, we return `False` as any misordering of the words makes our result `False`. If the first word has a lexicographically lower letter, we can skip checking the remainder of the letters to save some compute. If we iterate through all letters in the first word, we can move on to the next pair to check.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a dictionary for looking up the order of each letter in the new alphabet.
2. Iterate through each word in the given list. For each `word` in `words`, we check to see if its preceeding neighbor is longer, and contains the entirety of the second word to start. If it does, return `False` as the first word is lexicographically a greater word.
3. Iterate through each letter in both words, if `word1` has a lower letter, we can simply move onto the next pair, if they have the same letter, we check the next letter, and if `word2` has a lower letter, we return `False` as this word should be preceeding `word1`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(M)$. Let $M$ be the total number of letters across all words in words. We iterate through each letter of each word and perform constant time operations on each iteration. We also set up the dictionary; however, this is fixed at a size of $26$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize additional space for storing our dictionary; however, this is fixed in size at 26 so it is a constant space complexity.

## Code
```python3 []
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        letter_order = {}

        for i, letter in enumerate(order):
            letter_order[letter] = i
        
        n = len(words)
        for i in range(1, n):
            P = 0
            word1 = words[i - 1]
            word2 = words[i]
            
            if len(word1) > len(word2) and word1[:len(word2)] == word2:
                return False
            
            while P < len(word1):
                if letter_order[word1[P]] < letter_order[word2[P]]:
                    break
                elif word1[P] == word2[P]:
                    P += 1
                else:
                    return False

            continue
        
        return True
```