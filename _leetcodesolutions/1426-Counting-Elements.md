---
title: "1426 Counting Elements"
number: 1426
date: 2024-05-04
collection: leetcodesolutions
permalink: /leetcodesolutions/1426/
excerpt: Solution to [Leetcode 1426](https://leetcode.com/problems/counting-elements/description/)
---
# [Problem](https://leetcode.com/problems/counting-elements/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to how many numbers in `arr` meet the condition of also having their immediate successive number in `arr`. In essence, all numbers `x`, such that `x+1` is also in `arr` while counting repeat numbers if any exist.

This problem can be solved easily in two passes utilizing a hashset. We perform one pass to input the entire `arr` into the set, and then perform a second pass in which we tally the count of numbers which meet the criteria.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a set to contain all of the given array.
2. Initialize a counter to track our result, `res`.
3. For each number, `x`, in `arr` increment our result counter if `x+1` is also in `arr`.
4. Return `res`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a two pass approach and on each pass perform constant time operations on the iterations.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize constant space for storing all of the numbers in a hashset.

## Code
```C++
class Solution {
public:
    int countElements(vector<int>& arr) {
        unordered_set<int> numbers(arr.begin(), arr.end());
        
        int res = 0;
        for (int num : arr) {
            if (numbers.find(num + 1) != numbers.end()) {
                res++;
            }
        }
        return res;
    }
};
```