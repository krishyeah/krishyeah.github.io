---
title: "189 Rotate Array"
number: 189
date: 2024-01-30
collection: leetcodesolutions
permalink: /leetcodesolutions/189/
excerpt: Solution to [Leetcode 189](https://leetcode.com/problems/rotate-array/description/)
---
# [Problem](https://leetcode.com/problems/rotate-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to rotate an array of integers, `nums`, by `k` positions in place. This problem is trivial using O(k) space as the solution will have `k` numbers from the end of the array jump to the front of the array.

To solve this in O(1) space, we must recognize the pattern that occurs between the two sections of the array. If we flip the two sections of the array (the first section being the numbers before `len(nums) - k` and the second section being the last `k` numbers) and then flip the entire array, we rearrange the array such that the last `k` elements are now in the front and the array is in the proper order.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Flip the whole array
2. Filp the first section of the array (until `len(nums) - k`)
3. Flip the second section of the array (from `k` until the end)

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We flip each number in the array twice and thus have a linear time complexity.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space while flipping the numbers.

## Code
```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums_len = len(nums)

        k %= nums_len

        k = k % nums_len
        l, r = 0, nums_len - 1
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l, r = l + 1, r - 1
            
        l, r = 0, k - 1
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l, r = l + 1, r - 1
            
        l, r = k, nums_len - 1
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l, r = l + 1, r - 1
```