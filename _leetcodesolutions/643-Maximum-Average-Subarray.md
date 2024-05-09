---
title: "643 Maximum Average Subarray"
number: 643
date: 2024-05-04
collection: leetcodesolutions
permalink: /leetcodesolutions/643/
excerpt: Solution to [Leetcode 643](https://leetcode.com/problems/maximum-average-subarray-i/description/)
---
# [Problem](https://leetcode.com/problems/maximum-average-subarray-i/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum average for a subarray of exactly `k` elements from an array of numbers.

This problem is quite simple using the sliding window technique. We can simply find the sum of numbers within the first `k` numbers, and then add one number from the right, while subtracting one number from the left. By only keeping `k` numbers in our window, we can find the maximum sum of all `k` length subarrays and then divide the maximum sum by `k` to return our average.
 
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initalize our current sum as 0. Populate by adding up the first `k` elements.
2. Initialize our maximum sum as the initial current sum.
3. While there are still numbers to add, add one number from the right and subtract the leftmost number from the current sum. Compare against our maximum sum and keep the maximum of the two.
4. Return the maximum sum divided by `k` for the maximum average.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number once and perform a constant time operation on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for keeping track of the current and maximum sums.

## Code
```C++
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double cur_sum = 0;
        for (int i = 0; i < k; i++) {
            cur_sum += nums[i];
        }
        double max_sum = cur_sum;
        for (int right = k; right < nums.size(); right++) {
            cur_sum += nums[right] - nums[right - k];
            max_sum = max(cur_sum, max_sum);
        }
        return (double) max_sum / (double) k;
    }
};
```