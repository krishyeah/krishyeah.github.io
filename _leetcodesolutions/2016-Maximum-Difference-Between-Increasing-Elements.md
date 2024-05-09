---
title: "2016 Maximum Difference Between Increasing Elements"
number: 2016
date: 2024-05-06
collection: leetcodesolutions
permalink: /leetcodesolutions/2016/
excerpt: Solution to [Leetcode 2016](https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/)
---
# [Problem](https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the maximum difference between two integers in an array subject to the condition that the integer on the left is less than the integer on the right.

This problem can be solved by keeping track of our current minimum integer while iterating through all intgers in the array. We can simply update the minimum if we find an equal or lesser new number, or update our difference as necessary.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our current minimum number and our current maximum difference set to -1 to handle the case of having a monotonic decreasing array.
2. For each number in nums, if it is less than or equal to the current minimum, update our current minimum. Otherwise, update our maximum difference if the difference between the current number and the current minimum numbers are the same.
3. Return the maximum difference.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in the array once performing constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables for keeping track of our current minimum and the current maximum difference.

## Code
```C++
class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int cur_min = nums[0];
        int max_dif = -1;
        for (int num : nums) {
            if (num <= cur_min) {
                cur_min = num;
            }
            else {
                max_dif = max(num - cur_min, max_dif);
            }
        }

        return max_dif;
    }
};
```