---
title: "11 Container with Most Water"
number: 11
date: 2023-02-12
collection: leetcodesolutions
permalink: /leetcodesolutions/11/
excerpt: Solution to [Leetcode 11](https://leetcode.com/problems/container-with-most-water/description/)
---
# [Problem](https://leetcode.com/problems/container-with-most-water/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the maximum size of a bucket that is calculated by multiplying the height of the lowest wall of the bucket with the width of the bucket.

This problem is fairly straightfoward as we know that there are only two factors which affect the size of the bucket: the minimum wall height, and the width. If we were to choose the widest possible bucket, we would multiply the height of the shorter wall with the length of the array. If we wanted to continue using wide buckets, we would want to discard the shorter of the two walls as it is our limiting factor and because we are making our width smaller by moving the pointers closer together, we must compensate by finding higher walls. If we discard the higher of the walls, we will have a smaller width and the same or a smaller minimum wall height which can only decrease the current bucket area. Following this logic, at each iteration, we check the current area and update our current maximum if necessary, and then discard the shorter of the two walls while bringing the walls closer together.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our result variable, `res`, which will keep track of our current maximum area.
2. Initialize our two pointers, `L` and `R`, which keep track of our current walls.
3. Iterate while our left and right pointers have not crossed. If the current area is greater than our maximum, update the maximum. Then discard the shorter of the walls and move the pointer of the shorter wall towards the center. If the two walls are the same height, it does not matter which wall we discard as the next bucket is guaranteed to have a smaller area.
4. Return our maximum once the two walls touch.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire array once and perform a constant time operation on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our pointers.

## Code
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        L, R = 0, len(height) - 1

        while L < R:
            cur = min(height[R], height[L]) * (R - L)
            res = max(res, cur)

            if height[L] > height[R]:
                R -= 1
            else:
                L += 1
        
        return res
```