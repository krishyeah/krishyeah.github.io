---
title: "977 Squares of a Sorted Array"
number: 977
date: 2024-03-03
collection: leetcodesolutions
permalink: /leetcodesolutions/977/
excerpt: Solution to [Leetcode 977](https://leetcode.com/problems/squares-of-a-sorted-array/description/)
---
# [Problem](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to take as input a non-decreasing sorted array on integers and return a non-decreasing sorted array of the squares of each of the input integers.

While this may seem immediately trivial, we must consider the negative integers which would not be in the correct order after squaring each of those numbers. We could first square the numbers and then sort the resulting array; however, we are asked to solve this solution in linear time and thus we need another approach.

We can fill our resultant array, `answer`, by utilizing a two pointer approach starting at the ends of the array and working our pointers towards each other. We can check to see which is the greater of the two numbers and fill the array in from the right. We use this approach since our greatest numbers are going to be on the ends of the array in the case of having negative and positive numbers together or just on one end in the case of all positive or all negative numbers. By starting our pointers at the ends, we are guaranteed to start with the largest squared number and can work our way down from there. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create our resultant array, `answer`, which will store the sorted squares of our input array.
2. Create our two pointers, `l` and `r`, to start at the left and right sides of the input array respectively.
3. While the pointers have not crossed, take the greater of the two squares and place the result in the next available spot on the right of our resultant array.
4. Return the array when we have processed all numbers.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the input array once and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ if we include the resultant array. $O(1)$ if we do not. Interviewers and even Leetcode may have different opinions on this based on the question.

## Code
```python
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        len_nums = len(nums)
        
        answer = [0] * len_nums
        
        l, r = 0, len_nums - 1
        while l <= r:
            left, right = nums[l] * nums[l], nums[r] * nums[r]
            if left > right:
                answer[r - l] = left
                l += 1
            else:
                answer[r - l] = right
                r -= 1
        return answer
```