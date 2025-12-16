---
title: "244 Shortest Word Distance II"
number: 244
date: 2025-12-09
collection: leetcodesolutions
permalink: /leetcodesolutions/244/
excerpt: Solution to [Leetcode 244](https://leetcode.com/problems/shortest-word-distance-ii/description/)
---
# [Problem](https://leetcode.com/problems/shortest-word-distance-ii/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to come up with our own data structure which takes in a stream of words and is able to give the shortest distance between occurrences of a given `word1` and `word2`.

Intuitively if we think about how we might approach this problem, we would first want to look at the given words, and then write down where each occurrence of the words are. Then we would calculate the distances between each pair of occurrences to find the minimum distance.

This is mostly how we would want to solve it, except with an optimization that saves us the effort of having to compare every pair of occurrences. We first store the location of each occurrence of each word in a dictionary such that we can look up their occurrences quickly. We do this because we must create our own class which has methods called to find the shortest distance given two words, without future calls to the original string. By storing the given list of words in a dictionary, we can find the occurrences of each word without needing to scan through the list again.

Our dictionary will contain the words as the keys and their locations stored in lists as the lookup value. We then initialize a minimum distance as infinity to use late. We also initialize pointers for tracking which occurrences we have checked. Using pointers gives us the optimization of not needing to check every pair of words, but only the pairs that are closest to each other. For example, when iterating through the occurrences, the index for `word1` is greater than the index for `word2`. We know that all future indices of `word1`'s occurrences are going to be further away so we do not need to check them, but instead we increment the pointer to the index of `word2`. We continue this process of incrementing the pointer pointing to the lower index until we run out of occurrences to check. Then we can return our minimum distance.  

## Approach
<!-- Describe your approach to solving the problem. -->
1. Populate our dictionary `word_positions` which stores a list of the indices of each word in the given array.
2. Initialize our pointers for tracking the positions of both `word1` and `word2`. Initialize our minimum distance, `min_dist`, as infinity.
3. Find our lists of indices for both words and calculate the number of occurrences to ensure that we do not make an out of bounds request for indices with our pointers.
4. While both pointers are in bounds, update the minimum distance based on the current distance between the occurrences of `word1` and `word2`. Increment whichever pointer is currently pointing to the lower index.
5. Return the minimum distance.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each word a few times. 1. to populate the dictionary, 2. to iterate through each occurrence. This simplifies to $O(n)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize additional space to store each word and their occurrences in the given array.

## Code
```python3 []
class WordDistance:

    def __init__(self, wordsDict: List[str]):
        self.word_positions = defaultdict(list)
        
        for i, word in enumerate(wordsDict):
            self.word_positions[word].append(i)
        

    def shortest(self, word1: str, word2: str) -> int:
        min_dist = float('inf')
        i, j = 0, 0
        word1_positions = self.word_positions[word1]
        word2_positions = self.word_positions[word2]
        max_word1 = len(word1_positions)
        max_word2 = len(word2_positions)

        while i < max_word1 and j < max_word2:
            min_dist = min(min_dist, abs(word1_positions[i] - word2_positions[j]))
            if word2_positions[j] < word1_positions[i]:
                j += 1
            else:
                i += 1
        
        return min_dist

# Your WordDistance object will be instantiated and called as such:
# obj = WordDistance(wordsDict)
# param_1 = obj.shortest(word1,word2)
```