---
title: "1 Two Sum"
number: 1
date: 2023-12-06
collection: leetcodesolutions
permalink: /leetcodesolutions/1/
excerpt: Solution to [Leetcode 1](https://leetcode.com/problems/two-sum/description/)
---
# [Problem](https://leetcode.com/problems/two-sum/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to find two numbers from an array such that they sum to the target value and return their indices. The brute force method would be an $O(n^2)$ solution that iterates through each number in the array with a nested iteration checking all other values for the pair of numbers that add up to the target value.

In order to speed up the solution, we can utilize some space to keep track of previously seen numbers thereby doing a quick recall of previous values and their indices for a faster $O(n)$ solution. We can store the numbers and their indices in a hashmap for quick lookup which will utilize in total $O(n)$ space.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a hashmap for storing the integers in the array.
2. Iterate through the integers in the array and check if the complement to the current integer has been previously seen. If it has return the current index and the index of the complement.
3. Update the hashmap to include the current number.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array once and perform a constant time lookup in the hashmap during each iteration. $O(n) * O(1) \rightarrow O(n)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store each number in the hashmap which takes up $O(n)$ space.

## Code
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        comp = {}

        for i in range(len(nums)):
            if target - nums[i] in comp:
                return [i, comp[target - nums[i]]]
            comp[nums[i]] = i
```