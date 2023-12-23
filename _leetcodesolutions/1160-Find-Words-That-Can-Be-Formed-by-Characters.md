---
title: "1160 Find Words That Can Be Formed by Characters"
number: 1160
date: 2023-12-02
collection: leetcodesolutions
permalink: /leetcodesolutions/1160/
excerpt: Solution to [Leetcode 1160](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/)
---
# [Problem](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This question is fairly simple as we just have to see how many words from a list can be made using the given letters and then we return the length of all words in the list that can be created.

## Approach
<!-- Describe your approach to solving the problem. -->
We use a dictionary to store the total number of each letter that we have available for creating words. We then iterate through each word in the list and create a dictionary for the letters in that word and ensure that all letters are in the list of letters we have available and that their total count is less than or equal to the total count that we have available. If this property holds for all letters, we add the length of the word to our result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*k)$. We iterate through each word in the list and perform a number of operations that scales based on the length of each word.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(k)$. We use space for the dictionaries that is proportional to the total number of unique letters that we will see.

## Code
```python
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        coll = {}
        res = 0
        for c in chars:
            coll[c] = coll.get(c, 0) + 1
    

        for word in words:
            wordcoll = {}
            flag = True

            for c in word:
                wordcoll[c] = wordcoll.get(c, 0) + 1
            
            for key in wordcoll:
                if key not in coll:
                    flag = flag and False
                elif wordcoll[key] > coll[key]:
                    flag = flag and False
                else:
                    flag = flag and True
            
            if flag:
                res += len(word)
        
        return res
```