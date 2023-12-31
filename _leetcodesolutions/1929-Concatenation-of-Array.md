---
title: "1929 Concatenation of Array"
number: 1929
date: 2023-12-30
collection: leetcodesolutions
permalink: /leetcodesolutions/1929/
excerpt: Solution to [Leetcode 1929](https://leetcode.com/problems/concatenation-of-array/description/)
---
# [Problem](https://leetcode.com/problems/concatenation-of-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return an array of length `2*len(nums)` where `result[i] = result[i+len(nums)] = nums[i]`. Python offers an easy approach with just returning `nums+nums` and this will concatanate the arrays for you; however, to explain to an interviewer, we break this down to demonstrate our knowledge of each step.

We create a result array, `result`, of length `2*len(nums)`. We then iterate through the integers in `nums` and populate `result` in just one pass using two pointers. The first pointer tracks the current location in `nums` and the second one adds a bias to allow for the repeated population.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `result` as a list of integers with length `2*len(nums)`
2. Iterate through the length of `nums` while populating the same index, `i`, in result as well as the index `len(nums)` away which will have the repeated integer.
3. Return the result

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the length of `nums` once which has linear time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We create a new list which takes `2*n` space. $O(2*n) \rightarrow O(n)$.

## Code
```python
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums_length = len(nums)
        result = [0 for _ in range(nums_length * 2)]

        for i in range(nums_length):
            result[i] = nums[i]
            result[i + nums_length] = nums[i]
        
        return result
```