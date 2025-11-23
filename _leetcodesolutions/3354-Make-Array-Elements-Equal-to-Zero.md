---
title: "3354 Make Array Elements Equal to Zero"
number: 3354
date: 2025-10-28
collection: leetcodesolutions
permalink: /leetcodesolutions/3354/
excerpt: Solution to [Leetcode 3354](https://leetcode.com/problems/make-array-elements-equal-to-zero/description/)
---
# [Problem](https://leetcode.com/problems/make-array-elements-equal-to-zero/description/)

# Solution 
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether we can maintain a bouncing pattern between whole numbers while skipping past zeroes that we pass. We must decrement the non-zero numbers as we pass them. We are then to find the number of valid entry points that will let us "zero out" the entire array. 

A solution is not considered valid if we overflow or underflow the array as the last number is a zero and we go straight through it out of the array bounds.

While not very intuitive, we can imagine the solution to be a bouncing ball between two walls where each wall has a certain health. Each bounce reduces the health by one. We only consider a solution valid if both walls lost all of their health together. We can apply that to this solution by checking at each entry point if the sum of numbers on both sides (essentially the health of the walls) are equal or off by one. If they are equal, we have two valid solutions as we can start our bounces in either direction, if they are off by one, we only have one valid solution as we must start in the direction that is greater by 1.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Find the total sum and initialize our tracker for the current sum and result that  we return.
2. For each number, add the current number to our "left sum" (`cur_sum`). If the current number is a zero, then check whether our left and right sums are equal or off by one. Add the corresponding number of solutions to our result.
3. After we traverse the array, return the result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse the entire array once and perform a constant time operation in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```python3 []
class Solution:
    def countValidSelections(self, nums: List[int]) -> int:
        total_sum = sum(nums)
        cur_sum = 0
        res = 0

        for num in nums:
            cur_sum += num
            if num == 0:
                if cur_sum == total_sum / 2:
                    res += 2
                elif abs(2 * cur_sum - total_sum) == 1:
                    res += 1
        return res
```