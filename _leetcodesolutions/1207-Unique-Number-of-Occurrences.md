---
title: "1207 Unique Number of Occurrences"
number: 1207
date: 2024-01-16
collection: leetcodesolutions
permalink: /leetcodesolutions/1207/
excerpt: Solution to [Leetcode 1207](https://leetcode.com/problems/unique-number-of-occurrences/description/)
---
# [Problem](https://leetcode.com/problems/unique-number-of-occurrences/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return `True` if the number of occurrences of each item in a given list is unique. For example, if an item shows up exactly twice in the list, no other item can have exactly two occurrences as well.

To solve this, we simply can count the number of occurrences of each number and store this in memory, and then see if there are any repeated numbers in the occurrences.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our dictionary `occurrences` which we will use to store the number of occurrences of each integer in `arr`.
2. Iterate through `arr` to count the total number of occurences of each integer.
3. Return `True` if the total number of occurrences is equal to the unique number of occurrences found by comparing the sizes of a list and a set made using the occurrence numbers.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in `arr` once, we then iterate through the number of occurrences; however, this is dominated by the length of the array.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. Our dictionary uses a linear space complexity and dominates the stack space of the list and set.

## Code
```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        occurrences = {}

        for num in arr:
            occurrences[num] = occurrences.get(num, 0) + 1
        
        return len(list(occurrences.values())) == len(set(occurrences.values()))
```