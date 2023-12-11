---
title: "1441 Build an Array with Stack Operations"
number: 1441
date: 2023-11-03
collection: leetcodesolutions
permalink: /leetcodesolutions/1441/
excerpt: Solution to [Leetcode 1441](https://leetcode.com/problems/build-an-array-with-stack-operations/description/)
---
# [Problem](https://leetcode.com/problems/build-an-array-with-stack-operations/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a pretty easy question with only basic array operations needed in order to create the stack-like structure that the problem asks for.
## Approach
<!-- Describe your approach to solving the problem. -->
There are two conditions that each number will have as we iterate through the numbers from $1$ to $n$. Either:
1. The number is part of target and we add a `Push` operation to the result and iterate our pointer to keep track of the position in target (remember this is unsynced as while the array is strictly increasing, numbers may be skipped) or
2. the number is not part of target and we add a `Push` and `Pop` operation as each number gets pushed before it is removed.

Then we return the result. 

## Complexity

- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ time complexity as we iterate from $1$ to $n$ once and do a constant set of operations.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ space complexity to store the result. 

## Code

```python
class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        res = []
        pointer = 0
        for i in range(1,n+1):
            if i == target[pointer]:
                res.append("Push")
                pointer += 1
            else:
                res.append("Push")
                res.append("Pop")
            if pointer == len(target):
                return res
```