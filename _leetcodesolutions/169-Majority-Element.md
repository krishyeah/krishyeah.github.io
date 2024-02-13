---
title: "169 Majority Element"
number: 169
date: 2024-02-11
collection: leetcodesolutions
permalink: /leetcodesolutions/169/
excerpt: Solution to [Leetcode 169](https://leetcode.com/problems/majority-element/description/)
---
# [Problem](https://leetcode.com/problems/majority-element/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the element within an array which occurs more than `n/2` times. We are guaranteed to have an element which satisfies this case so we can use a candidate voting system to easily solve this problem.

The candidate voting solution will keep track of the current element that we believe is our candidate and as we come across new numbers we will either vote for the current candidate and increase its voting count, or decrease the voting count from the current candidate. If our count is ever zero, we replace the candidate with our current number and continue voting. Because we are guaranteed to have more than `n/2` occurrences of a number, our final candidate will have at least `1` vote and will be this number.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our current candidate, `cur`, to `inf` (any number that is out of the constraints will suffice)
2. Initialize our current candidates votes, `cur_count` to 0
3. Iterate through each number. If the current vote count is 0, replace the candidate with the current number. If the current number is our candidate, increment the vote count, else decrement the vote count.
4. Return our final candidate.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in the array once and perform constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for keeping track of the candidate and our vote count.

## Code
```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        cur = float('inf')
        cur_count = 0

        for num in nums:
            if cur_count == 0:
                cur = num
            
            cur_count = cur_count + 1 if num == cur else cur_count - 1
        
        return cur
```