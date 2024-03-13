---
title: "35 Search Insert Position"
number: 35
date: 2024-03-12
collection: leetcodesolutions
permalink: /leetcodesolutions/35/
excerpt: Solution to [Leetcode 35](https://leetcode.com/problems/search-insert-position/description/)
---
# [Problem](https://leetcode.com/problems/search-insert-position/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the position at which a given `target` integer would be inserted into in a given sorted array of integers, `nums`. Our output will be this index. We must also solve this problem in $O(\log(n))$ time complexity.

We perform binary serach which takes the required time complexity. Binary search divides the search space in half in each iteration and thus requires a maximum of $\log(n)$ operations in order to reduce the search space down to the one index that is needed. The only modification we make to the binary search is that we return the left pointer, `L`, as during the last iteration when the pointers meet, if the current number is less than `target`, we will return the next index as the `target` will go one position after the current number; `L` will be incremented in this case as the last `else` condition is met. If in the last iteration when the pointers have met, the current number is higher than the `target`, we will return the current index which is pointed to by `L` which remains untouched by the `elif` condition.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our left and right pointers, `L` and `R`, respectively.
2. While the pointers have not crossed, continue iterating. If the `target` is found, return its index. If the current number is higher than the `target`, lower `R` and continue iterating. If the current number is lower than `target`, increase `L` and continue iterating.
3. Return the left pointer, `L`, after the pointers have crossed.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(\log(n))$. We perform a binary search which takes $O(\log(n))$ time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We perform binary serach which takes constant additional space.

## Code
```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        L = 0
        R = len(nums) - 1

        while L <= R:
            M = (R + L) // 2
            if nums[M] == target:
                return M
            elif nums[M] > target:
                R = M - 1
            else:
                L = M + 1
        
        return L
```