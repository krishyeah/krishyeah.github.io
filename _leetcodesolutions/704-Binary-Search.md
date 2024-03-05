---
title: "704 Binary Search"
number: 704
date: 2024-03-04
collection: leetcodesolutions
permalink: /leetcodesolutions/704/
excerpt: Solution to [Leetcode 704](https://leetcode.com/problems/binary-search/description/)
---
# [Problem](https://leetcode.com/problems/binary-search/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to implement binary search in order to find the location of a target number given in a sorted array of integers. We want to implement this in a time complexity of $O(\log(n))$.

To do this we implement binary search. Borrowing from the explanation given by David Malan of Harvard's CS50, binary search is similar to what we do when we open a phone book to find a person's name or open a dictionary to find a word. We typically would start somewhere in the middle and if the name/word was lexicographically smaller than what we see on the current page, we would flip towards the earlier words. By dividing the search space in half in every lookup, at maximum, we will need to divide by 2 until we find what we are looking for. The number of times the total length, n, can be divided by 2 is $\log_{2}(n)$ which is what we want our runtime to be.

We can start with our search space being the whole length of the array and have two pointers at each end of the array. We then check the very center element. If it is what we are looking for, we return the index of the element. If the current integer is greater than what we are looking for, we decrease the search space by moving our right pointer immediately to the left of the middle. If the current integer is less than what we are looking for, we decrease the search space by moving our left pointer immediately to the right the middle. We repeat this process until we find what we are looking for, or our search space is now 0 as our left and right pointers have crossed, in this case we return -1 to indicate we could not successfully find what we were looking for.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our left and right pointers, `L` and `R`, as `0` and `len(nums) - 1` respectively.
2. While our pointers have not crossed, search the middle index. If the number at the middle index is what we are looking for, we return the index of the element. If the current integer is greater than what we are looking for, we decrease the search space by moving our right pointer immediately to the left of the middle. If the current integer is less than what we are looking for, we decrease the search space by moving our left pointer immediately to the right the middle. We repeat this process until we find what we are looking for, or our search space is now 0 as our left and right pointers have crossed, in this case we return -1 to indicate we could not successfully find what we were looking for.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(\log(n))$. We perform binary search.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for performing binary search.

## Code
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        L, R = 0, len(nums) - 1
    
        while L <= R:
            M = (R + L) // 2
            if nums[M] == target:
                return M
            elif nums[M] > target:
                R = M - 1
            else:
                L = M + 1
        
        return -1
```