---
title: "791 Custom Sort String"
number: 791
date: 2024-01-22
collection: leetcodesolutions
permalink: /leetcodesolutions/791/
excerpt: Solution to [Leetcode 791](https://leetcode.com/problems/custom-sort-string/description/)
---
# [Problem](https://leetcode.com/problems/custom-sort-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to take a string, `s`, and order its characters based on the relative order of characters given in another input string. 

We can use a frequency hashmap to count the number of each character in `s`. We can then iterate through `order` and add each occurnence of that character in `s` to our result, `res`. Any characters still remaining in the frequency hashmap are not in `order` and therefore their order is not relevant. We can simply add those characters to the end of `res` and return our final string.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a hashmap, `counts`, for storing the frequency of each character in `s`.
2. For each character in `s`, update the frequency in `counts`.
3. Initialize an empty array. This is used for storing the result as strings are immutable in Python and it will create additional overhead for each string concatentation.
4. Iterate through each character in `order`. For each occurrence of that character in `s`, add them to `res` and decrement the counter in `counts`.
5. For each character that is remaining in our frequency hashmap, we add each occurrence into `res`.
6. Join the array into a list and return.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. The creation of the frequency hashmap is $O(n)$. The iteration through `order` is $O(1)$ as it is a fixed size due to not having any repeating characters and only containing lowercase characters. The addition of the characters in `s` in order is $O(n)$. The joining of the array into a string is $O(n)$. $O(n) + (O(1) * O(n)) + O(n) \rightarrow O(n)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ due to the array used for storing the result. The given solution uses an array for optimization as Python strings are immutable.

## Code
```python
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        counts = {}

        for c in s:
            counts[c] = counts.get(c, 0) + 1
        
        res = []
        for c in order:
            if c in counts:
                c_counts = counts[c]
                for i in range(c_counts):
                    res.append(c)
                    counts[c] -= 1
        
        for c in counts:
            if counts[c] > 0:
                for i in range(counts[c]):
                    res.append(c)
        
        return ''.join(res)
```