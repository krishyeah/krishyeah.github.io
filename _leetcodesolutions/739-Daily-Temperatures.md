---
title: "739 Daily Temperatures"
number: 739
date: 2024-01-22
collection: leetcodesolutions
permalink: /leetcodesolutions/739/
excerpt: Solution to [Leetcode 739](https://leetcode.com/problems/daily-temperatures/description/)
---
# [Problem](https://leetcode.com/problems/daily-temperatures/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find for each daily temperature, the number of days that we need to wait until the next highest temperature is reached.

The trivial solution which has a time complexity of $O(n^2)$ and constant space complexity is to simply iterate through each daily temperature and count the number of days until the next highest value is reached.

We can greatly increase performance at the cost of some memory and achieve a solution with a time complexity of $O(n)$ and a space complexity of $O(n)$. We utilize a stack to keep track of the daily temperatures. When we come across a higher temperature, we pop values off of the stack until the stack is empty or the new temperature is not greater than a previously stored temperature and then we add the new temperature to the stack as well. If the new temperature is lower, we simply add it to the stack. The stack can simply store indices of previous temperatures, but for simplicity, we store the index and temperature as a list which is pushed onto the stack.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our result list, `res`, with a default value of `0` which indicates we did not find a new higher temperature for that day.
2. Initialize our stack, `stack`.
3. Iterate through each daily temperature in `temperatures`. 
4. If there are daily temperatures in the stack that have a temperature lower than the current temperature, pop them from the stack and update their index in `res` with the number of days between the previous value and the current value.
5. Append the current value to the stack.
6. Return `res`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the input list once performing constant time operations in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We make use of a stack for storing the previous temperature values.

## Code
```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                prevT, prevI = stack.pop()
                res[prevI] = i - prevI
            stack.append([t, i])
        
        return res
```