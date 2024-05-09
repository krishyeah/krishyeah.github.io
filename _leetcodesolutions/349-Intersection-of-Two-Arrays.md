---
title: "349 Intersection of Two Arrays"
number: 349
date: 2024-03-09
collection: leetcodesolutions
permalink: /leetcodesolutions/349/
excerpt: Solution to [Leetcode 349](https://leetcode.com/problems/intersection-of-two-arrays/description/)
---
# [Problem](https://leetcode.com/problems/intersection-of-two-arrays/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a unique list of elements that are the intersection of the two input lists.

To solve this problem we create a set to store the first input list. We can then iterate through the second list and using a set's $O(1)$ lookup find whether the number was present in the first list. We can place numbers which are present in both lists into a set and then create a list from that set.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a set for fast lookup of the first input list
2. Initialize our result which we will store in a set.
3. Iterate through the second list and for each number which is in our set representation of the first list, we add it to our result set.
4. Convert our result set into a list and return.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n+m)$. We iterate through the first list in order to put it into the set, we then iterate through the second list and use a set lookup to find the first element. $O(n)+(O(m)*O(1)) \rightarrow O(n+m)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store the first list in a set for this solution which uses space linear in size to the first list.

## Code
```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1 = set(nums1)
        res = set()

        for num in nums2:
            if num in nums1:
                res.add(num)
        
        return list(res)
```