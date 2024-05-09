---
title: "1413 Minimum Value to Get Positive Step by Step Sum"
number: 1413
date: 2023-12-15
collection: leetcodesolutions
permalink: /leetcodesolutions/1413/
excerpt: Solution to [Leetcode 1413](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/)
---
# [Problem](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the minimum value to get a postive step-by-step sum. This basically means that we want our running sum to always be greater than 0, given a starting bias that we can select.

We can simply calculate the running sum for the array and return the greater of 1 greater than the minimum value or 1 in order to have the running sum always be positive.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a minimum and current running sum to both start at 0.
2. For each value in nums, add it to the current running sum and update the minimum running sum as necessary.
3. Return 1 greater than the minimum sum or 1 which ever is greater as we have to return at least 1.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array once and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```C++
class Solution {
public:
    int minStartValue(vector<int>& nums) {
        int min_run_sum = 0;
        int cur_run_sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            cur_run_sum += nums[i];
            min_run_sum = min(min_run_sum, cur_run_sum);
        }
        return max(-min_run_sum + 1, 1);
    }
};
```