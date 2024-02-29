---
title: "2149 Rearrange Array Elements by Sign"
number: 2149
date: 2024-02-14
collection: leetcodesolutions
permalink: /leetcodesolutions/2149/
excerpt: Solution to [Leetcode 2149](https://leetcode.com/problems/rearrange-array-elements-by-sign/description/)
---
# [Problem](https://leetcode.com/problems/rearrange-array-elements-by-sign/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a modified version of an array which has alternating positive and negative numbers starting with a positive number. We are guaranteed that there are an equal number of positive and negative numbers which makes this modification possible in all cases.

This is fairly straight forward as we can simply create an output array and utilize two pointers to keep track of where the next positive and negative numbers are to go. Then we can iterate through the input array and update the position in the output based on the signage of the current number and move that pointer forward two indices for the next number.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize return array, `ans`, with the same size as the input array. Fill with any number.
2. Initialize positive index pointer, `pos_idx`, and negative index pointer, `neg_idx`.
3. Iterate through `nums` and for each number if it is positive, put the number in place of the `pos_idx` in `ans` and if it is negative, put the number in place of the `neg_idx` in `ans`. Move the pointer forward two places to maintain the alternating pattern.
4. Return the array `ans`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in `nums` once and perform constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize space for our output array which is linear in size to the input array size.

## Code
```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums_len = len(nums)

        ans = [0] * nums_len

        pos_idx, neg_idx = 0, 1

        for i in range(nums_len):
            if nums[i] > 0:
                ans[pos_idx] = nums[i]
                pos_idx += 2
            else:
                ans[neg_idx] = nums[i]
                neg_idx += 2

        return ans
```