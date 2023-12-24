---
title: "49 Group Anagrams"
number: 49
date: 2023-12-04
collection: leetcodesolutions
permalink: /leetcodesolutions/49/
excerpt: Solution to [Leetcode 49](https://leetcode.com/problems/group-anagrams/description/)
---
# [Problem](https://leetcode.com/problems/group-anagrams/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is fairly straightforward as it requires us to group strings together based on the letters used in the strings. We need to return a list of lists with the inner lists containing strings that are anagrams of each other. The easiest way to do this is to sort the letters so that we can compare strings.

## Approach
<!-- Describe your approach to solving the problem. -->
We create a dictionary to store our results. We then iterate through the array of strings and sort each one and add it to the list of alike strings. We return the list of all strings combined with their anagram strings.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(nk*log(k)$. We iterate through the array once, but since the sorting is based on the length of each string in the array, we have a pseudo-polynomial runtime.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ as the collection takes up the same amount of space as the original array.

## Code
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        coll = defaultdict(list)

        for s in strs:
            sstr = (''.join(sorted((s))))

            coll[sstr].append(s)
        
        return coll.values()
```