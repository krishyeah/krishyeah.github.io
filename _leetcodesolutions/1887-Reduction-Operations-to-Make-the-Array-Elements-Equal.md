---
title: "1887 Reduction Operations to Make the Array Elements Equal"
number: 1887
date: 2023-11-20
collection: leetcodesolutions
permalink: /leetcodesolutions/1887/
excerpt: Solution to [Leetcode 1887](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/)
---
# [Problem](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/)

# Solution

## Intuition

<!-- Describe your first thoughts on how to solve this problem. -->
This problem is slightly tricky at first, but there are a few clever ways to solve it. The problem is asking us to perform operations to numbers in an array in order to make them all equal. An operation is taking the largest number in the array, and reducing it to the next largest. We continue this until all numbers in the array are equal. We want to return the number of operations so we must add up the required number of operations to make the array elements equal.

## Approach

<!-- Describe your approach to solving the problem. -->
The problem has a clever math solution. The number of operations that we must perform can be determined by continuously summing up the number of elements which must be changed in order to reduce to the lowest one. The second smallest elements all take one operation to reduce, the third smallest elements will all take two operations to reduce, etc. We continue adding to `res` 1 per unique element thus found to include the number of reductions needed for all elements up to the current element.

## Complexity

- Time complexity:

<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*log(n))$. We sort which is $O(n*log(n))$ and then run through each element performing constant time operations which is $O(n)$. The sorting dominates.

- Space complexity:

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. $O(1)$ space used for variables. Sorting space is $O(n)$. Sorting dominates.

## Code
```python
class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        nums.sort()
        res = 0
        back = 0
        
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                back += 1
                
            res += back
        
        return res
```