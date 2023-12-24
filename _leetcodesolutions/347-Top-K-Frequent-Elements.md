---
title: "347 Top K Frequent Elements"
number: 347
date: 2023-12-07
collection: leetcodesolutions
permalink: /leetcodesolutions/347/
excerpt: Solution to [Leetcode 347](https://leetcode.com/problems/top-k-frequent-elements/description/)
---
# [Problem](https://leetcode.com/problems/top-k-frequent-elements/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to find the `k` most frequent elements from a list that may contain repeats. In order to find the `k` most frequent elements, we need to count the frequency of each number and then return the `k` numbers with the highest frequency from the list.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a map for $O(1)$ storing and look up of the frequencies of each number in the list.
2. Iterate through the list and update the frequency of each number that shows up in the list.
3. Initialize a list of lists to store all numbers that have the same frequency.
4. Iterate through the map to store all numbers together that have the same frequency.
5. Initialize a list for storing the result.
6. Iterate through the frequency pairings list starting from the right where we have stored the most frequent elements, and continue adding elements until `k` elements are added to the result.
7. Return this result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through all numbers for counting frequencies, all numbers for pairing with equally frequent elements, and then `k` numbers for finding our result.
$O(n)+O(n)+O(k) \rightarrow O(n)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store each element in two separate data structures and store the `k` most frequent elements.
$O(n)+O(n)+O(k) \rightarrow O(n)$
 
## Code
```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        occurrences = defaultdict(int)

        for num in nums:
            occurrences[num] += 1
        
        freq = [[] for i in range(len(nums) + 1)]

        for num, count in occurrences.items():
            freq[count].append(num)

        res = []

        for i in range(len(freq) - 1, -1, -1):
            for j in freq[i]:
                res.append(j)
                if len(res) == k:
                    return res
        
```