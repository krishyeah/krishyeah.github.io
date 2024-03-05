---
title: "561 Array Partition"
number: 561
date: 2024-02-27
collection: leetcodesolutions
permalink: /leetcodesolutions/561/
excerpt: Solution to [Leetcode 561](https://leetcode.com/problems/array-partition/description/)
---
# [Problem](https://leetcode.com/problems/array-partition/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximized sum of an array subject to the constraint of first creating pairs of numbers from the array and then using only the minimum value out of the two numbers in the pair.

Solving this problem is fairly straightforward when we realize to return the maximized sum, we want to minimize the wasted integers. If we pair `1` with `100`, we will only get a `1` from their pairing. Thus, we want to pair the smallest integers with other small integers. To accomplish this, we can simply sort the array. We can then skip the pairing process and just add the sum of every other value. Our pairings are going to include adjacent numbers only and because they are sorted, the lower of the two numbers will come first. Thus, we can just sum the 0th, 2nd, 4th, ..., and (n-1)th numbers together and return this value.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the `nums` array.
2. Initialize our result to start at 0.
3. Iterate through `nums` and take every second number to add to our result.
4. Return the result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n))$. We sort nums before iterating through the array. The sorting dominates the time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. Sorting takes $O(n)$ space which dominates our space complexity.

## Code
```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        
        res = 0
        for i in range(0, len(nums), 2):
            res += nums[i]
    
        return res
```