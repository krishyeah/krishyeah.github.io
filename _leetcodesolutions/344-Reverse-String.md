---
title: "344 Reverse String"
number: 344
date: 2024-05-04
collection: leetcodesolutions
permalink: /leetcodesolutions/344/
excerpt: Solution to [Leetcode 344](https://leetcode.com/problems/reverse-string/description/)
---
# [Problem](https://leetcode.com/problems/reverse-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to perform a constant-space in-place reversal of a string.

This is quite an easy problem to solve as we can simply use two pointers and a temp variable to do a character-by-character reversal of a string.

We can set up two pointers at each end of the string and then flip them with the use of a temporary variable. We move the pointers in towards the center until the pointers cross performing the same reversal technique.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initalize our pointers at the left and right ends of the string.
2. While our pointers have not crossed, use a temp variable to help with the flip and move the pointers in towards the center.
3. Exit the loop and let the function end as we performed an in-place traversal.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We have a linear time complexity as we perform operations linearly proportinal to the size of the string.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our temp variable.

## Code
```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0;
        int right = s.size() - 1;

        while (left < right) {
            char tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }
};
```