---
title: "27 Remove Element"
number: 27
date: 2023-11-03
collection: leetcodesolutions
permalink: /leetcodesolutions/27/
excerpt: Solution to [Leetcode 27](https://leetcode.com/problems/remove-element/description/)
---
# [Problem](https://leetcode.com/problems/remove-element/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires not only counting the number of non-target values, but also rearranging the array to keep the target values in the beginnging of the array. The choice is given to make the values in the end of the array any value which leads to multiple solutions that have been posted.

## Approach
<!-- Describe your approach to solving the problem. -->
This approach uses a slow and fast pointer as we would like to track the number of good elements while also iterating through all elements in the list. Using a fast and slow pointer also allows for easy access to the result which is just the position of the slow pointer as that relates to the number of good elements in the list.

We swap values on every iteration unless the fast value is a target value in which case it is kept in place. This will result in all target values continuously getting kicked towards the end of the list as the slow pointer will always kick towards the fast pointer. When the fast pointer reaches the end, the slow pointer will have "swept" all target values to the end of the list and will point to the first position of a target value ensuring all previous values are good values.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we iterate through the list only one time doing a constant operation per iterative step.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as we do not create any new data structures and only use two variables.

## Code
```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != val:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
                        
        return slow
```