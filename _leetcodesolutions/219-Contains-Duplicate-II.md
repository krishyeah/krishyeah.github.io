---
title: "219 Contains Duplicate II"
number: 219
date: 2023-11-22
collection: leetcodesolutions
permalink: /leetcodesolutions/219/
excerpt: Solution to [Leetcode 219](https://leetcode.com/problems/contains-duplicate-ii/description/)
---
# [Problem](https://leetcode.com/problems/contains-duplicate-ii/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return `True` if `nums` contains a duplicate such that `nums[i] == nums[j]` and `abs(i-j) <= k`. We need some clever way of storing the numbers that we have seen to be able to look up their indices within `nums` so that we can find the solution. A sliding window approach would lead to a time complexity of $O(n*k)$ with a space complexity of $O(k)$ as we would have to search through the full window size for each number. We can do better using a hashmap for a time complexity of $O(n)$ and a space complexity of $O(n)$. 

## Approach
<!-- Describe your approach to solving the problem. -->
By using a hashmap we can store the index of occurence of each number. As we will iterate through the array left to right, we can save on some space and time by only storing the rightmost occurence of each number. The algorithm is as follows:
1. Iterate through each number in `nums`
2. If the current number is in the hashmap and the last position of the current number meets the criteria, return True
3. Else, update the latest occurrence and continue iterating.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through each number in the array once and perform constant time lookup in the hashmap per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ worst case as we may store every number in the array if they are all unique.

## Code
```python
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        coll = {}
        for i, val in enumerate(nums):
            if val in coll and i - coll[val] <= k:
                return True
            coll[val] = i

        return False
```