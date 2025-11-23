---
title: "1437 Check If All 1's Are at Least Length K Places Away"
number: 1437
date: 2025-11-17
collection: leetcodesolutions
permalink: /leetcodesolutions/1437/
excerpt: Solution to [Leetcode 1437](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/)
---
# [Problem](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to count the number of zeros between 1's in the array and return `True` if there are at least `k` zeros between each `1` in the array or `False` if there is a pair of `1`'s that do not have `k` zeros in between them.

If we think about how we would solve this problem by hand, our intuition leads us to scan through the array, keep track of the position of each `1` and then subtract the position of the next `1` in order to count the distance between the two. This ends up being the most efficient way to solve this problem. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. We initialize the "initial" position of the last one as `-(k + 1)` as this will ensure that we can easily keep track of the first `1` without needing to do anything more complicated to find our first `1`.
2. We scan through each number in the array. If the number is a `1`, we check to make sure the distance between the last `1` and the current `1` is at least `k`. If it is not, we can simply return `False`. If it is at least `k` away, we update our `cur` variable which tracks the position of the last `1` that we have seen.
3. We return `True` if we exit our linear scan without finding any `False` conditions.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We perform a linear scan of the array while performing constant time steps for each scan step.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```python3 []
class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        cur = -(k + 1)
        for i in range(n):
            if nums[i] == 1:
                if i - cur <= k:
                    return False
                cur = i

        return True
```