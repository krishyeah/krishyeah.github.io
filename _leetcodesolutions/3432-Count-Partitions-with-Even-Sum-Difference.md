---
title: "3432 Count Partitions with Even Sum Difference"
number: 3432
date: 2025-12-05
collection: leetcodesolutions
permalink: /leetcodesolutions/3432/
excerpt: Solution to [Leetcode 3432](https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/)
---
# [Problem](https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/)

# Solution 

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the number of partitions of an array where the difference between the two partitions is an even number. A partition of an array is considered as splitting the array into a left and right section of the array at any number. For example:
`[1, 2, 2]` has the follwing partitions:
- `[1]` and `[2, 2]`
- `[1, 2]` and `[2]`

The left and right partitions must be non-empty so we can deduce that there are `n - 1` partitions for an array of size `n`.

If the two partitions have an even difference, either both partitions have even sums, or both partitions have odd sums. They must both have a matching parity in order for their difference to be even. This leads us to the realization that if we add the two paritions, their sum must be even. Thus, we know the total sum of the array must be even in order for there to be paritions such that their differences are even. We can also find that no matter what the numbers in the array are, if the sum is even, the difference of all paritions will be even. This is because for each partition, we have two possibilities:
1. We add an odd number to our left partition. This requires us to remove the odd number from our right partitions. Thus the parities of the partitions will flip from either even to odd, or odd to even, but they will both change together.
2. We add an even number to our left partition. This requires us to remove the even number from our right partition. Thus, the parities of the partitions will remain the same. They will both continue to be odd parities, or both continue to be even parities.

Because there are `n - 1` partitions, there will be `n - 1` partitions of matching parity if the total sum is even and `0` partitions of matching parity if the total sum is odd.

## Approach
<!-- Describe your approach to solving the problem. -->
1. If the total sum is even, return the length of the array minus 1. If the total sum is odd, return 0.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(N)$. Calculating the sum of the array takes constant time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space for our solution.

## Code
```python3 []
class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        if sum(nums) % 2 == 0:
            return len(nums) - 1
        else:
            return 0
```
