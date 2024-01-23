---
title: "645 Set Mismatch"
number: 645
date: 2024-01-22
collection: leetcodesolutions
permalink: /leetcodesolutions/645/
excerpt: Solution to [Leetcode 645](https://leetcode.com/problems/set-mismatch/description/)
---
# [Problem](https://leetcode.com/problems/set-mismatch/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem gives us a list of numbers from 1 to n, but with the condition that one of the numbers has been duplicated and overwritten on another number leading to there being 1 duplicate and 1 missing number. We need to return a list containing the duplicate and missing numbers.

This problem is fairly simple using linear time and space. We simply create a set of all numbers from 1 to n and as we iterate through `nums`, we remove the number we see from the set assuming it is there. If the number is not there, that is our duplicate number. The only remaining number in the set after the iteration will be the missing number. We can return these two numbers in a list to solve the problem.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a set of numbers from 1 to `n` (with `n` being the total length of `nums`), `numbers`.
2. Create an empty list, `res`, to store our results.
3. Iterate through `nums` and remove each number that we come across from our set `numbers`. If the number has already been removed, we have our duplicate and we add it to our result.
4. Add the only number remaining in our set to our result as it is the missing number.
5. Return our list containg the duplicate and missing number.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in the list and perform a constant time operation in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We make use of a set of size `n` so we utilize a linear space complexity.

## Code
```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        numbers = set([x for x in range(1, len(nums) + 1)])

        res = []

        for num in nums:
            if num in numbers:
                numbers.remove(num)
            else:
                res.append(num)
        
        res += list(numbers)
        return res
```