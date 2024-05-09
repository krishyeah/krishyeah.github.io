---
title: "1480 Running Sum of 1d Array"
number: 1480
date: 2024-05-04
collection: leetcodesolutions
permalink: /leetcodesolutions/1480/
excerpt: Solution to [Leetcode 1480](https://leetcode.com/problems/running-sum-of-1d-array/description/)
---
# [Problem](https://leetcode.com/problems/running-sum-of-1d-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the running sum for each number in nums. The running sum is the sum of all preceding integers including the current integer.

We can solve this in-place by continously adding the value stored in the previous index with the current number.

## Approach
<!-- Describe your approach to solving the problem. -->
1. For each index in `nums`. Add the value stored in the previous index with the current index.
2. Return `nums`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in `nums` and perform constant time operation on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space as we perform our running sum in-place.

## Code
```C++
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for (int i = 1; i < nums.size(); i++) {
            nums[i] += nums[i - 1];
        }
        return nums;
    }
};
```