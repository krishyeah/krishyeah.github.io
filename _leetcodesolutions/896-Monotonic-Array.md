---
title: "896 Monotonic Array"
number: 896
date: 2023-10-09
collection: leetcodesolutions
permalink: /leetcodesolutions/896/
excerpt: Solution to [Leetcode 896](https://leetcode.com/problems/monotonic-array/description/)
---
# [Problem](https://leetcode.com/problems/monotonic-array/description/)

# Solution

## Intuition
Intuitively we know we want to scan the array twice, once to check for an increasing monotonic condition, and once to check for a decreasing monotonic condition.
## Approach
Building on the intuition an efficient solution would be able to check for both conditions in one loop as both conditions check for a solution in a left-to-right manner. We can simultaneously look for both conditions since only one or neither condition will be met during the same left-to-right pass.

## Complexity
- Time complexity:
The time complexity is $$O(n)$$ for the loop and $$O(1)$$ for all checks within the `for` loop thus making the time complexity $$O(n)$$.

- Space complexity:
There are two constant space variables created so the space complexity is $$O(1)$$.

## Code

```python
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        # Flag to check for increasing monotonic condition
        incFlag = True
        # Flag to check for decreasing monotonic condition
        decFlag = True
        for i in range(1,len(nums)):
            # Fail condition for a decreasing monotonic condition
            if nums[i] > nums[i-1]:
                decFlag = False
            # Fail condition for a decreasing monotonic condition
            if nums[i] < nums[i-1]:
                incFlag = False
        # Only one or neither flag will remain True after traversal
        return decFlag or incFlag
```