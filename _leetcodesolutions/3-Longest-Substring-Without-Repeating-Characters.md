---
title: "3 Longest Substring Without Repeating Characters"
number: 3
date: 2024-05-05
collection: leetcodesolutions
permalink: /leetcodesolutions/3/
excerpt: Solution to [Leetcode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)
---
# [Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the length of the longest substring without repeating characters from a given string `s`.

To solve this problem, we can use a hashset for storing all of the current characters that are in our substring. If the next character that we want to add is in our hashset, we continuously remove characters from the left to shrink our substring and drop those letters from our set. We continue to add characters from the right while shrinking our substring as necessary. We also update a result variable keeping track of the length as we add each new letter to our string.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a left pointer at index 0, a hashset, and a result variable.
2. For each letter in the string, before adding to our current substring, make sure it is not already in our set and drop letters from the left to ensure this condition is met prior to adding it to our substring. Then measure the length of the current substring and compare with our maximum.
3. Return the length of the longest substring without any repeating characters.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each letter in the string and perform constant time operations on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a set for keeping track of each letter we have already seen.

## Code
```C++
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int left = 0;
        unordered_set<char> letters;
        int res = 0;

        for (int right = 0; right < s.size(); right++) {
            while (letters.find(s[right]) != letters.end()) {
                letters.erase(s[left++]);
            }
            letters.insert(s[right]);
            res = max(res, right - left + 1);
        }
        return res;
    }
};
```