---
title: "771 Jewels and Stones"
number: 771
date: 2024-01-22
collection: leetcodesolutions
permalink: /leetcodesolutions/771/
excerpt: Solution to [Leetcode 771](https://leetcode.com/problems/jewels-and-stones/description/)
---
# [Problem](https://leetcode.com/problems/jewels-and-stones/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return how many of the `stones` we are given are jewels in comparison with our collection of jewel characters given in `jewels`.

The brute force solution would be to iterate through `jewels` for each stone in `stones` and compare whether the current stone is a `jewel`. This would take $O(n*m)$ as we iterate through the `jewels` string for each iteration through the `stones` string.

This problem can be efficiently solved using a hashset as we can use the set for a quick lookup of each stone and compare if it is a jewel or not. We can use a little extra space for storing the `jewels` in a hashset, but our lookup becomes $O(1)$ so we use $O(1*m)$ or $O(m)$ time and $O(n)$ space.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a hashset to store each jewel.
2. Initialize our result variable to start at 0.
3. For each stone, check to see if it is in our hashset and increment our result if it is.
4. Return our result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(m)$ where $m$ is the length of `stones`. We iterate through each stone and perform a constant time lookup in our hashset.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ where $n$ is the length of `jewels`. We create a hashset to store each jewel.

## Code
```C++
class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        unordered_set<char> jewel_types(jewels.begin(), jewels.end());
        int res = 0;

        for (char stone : stones) {
            if (jewel_types.find(stone) != jewel_types.end()) {
                res++;
            }
        }
        return res;
    }
};
```