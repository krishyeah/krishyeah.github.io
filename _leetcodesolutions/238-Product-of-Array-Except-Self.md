---
title: "238 Product of Array Except Self"
number: 238
date: 2023-12-07
collection: leetcodesolutions
permalink: /leetcodesolutions/238/
excerpt: Solution to [Leetcode 238](https://leetcode.com/problems/product-of-array-except-self/description/)
---
# [Problem](https://leetcode.com/problems/product-of-array-except-self/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a list of numbers such that at each element in the new list corresponds to the product of the original list excluding the element that is at the current index. We are required to do this without using division and are challenged to do this in $O(n)$ time complexity and $O(1)$ space complexity excluding the space used for the return list.

If we were to do this by hand, we would want a way to calculate the product of all elements before with all elements after the current index. Utilizing our resulting list to meet the space complexity challenge, we can implement this in a very neat way using two iterations, one to calculate the product of elements before the current index, and one to calculate the product of elements after the current index.

## Approach
<!-- Describe your approach to solving the problem. -->

1. Initialize the result list, `res`. The initialized value of the list doesn't matter as it will be overwritten.

2. The first pass finds the product of elements that occur before the current index in `nums`. We set the first value of `res` to 1 as there are no elements before it.

3. Iterate through `res` and set each element equal to the product of the previous index in `res` and `nums`. This iteratively builds up the prefix product of the array. 

4. Initialize a suffix product variable as `post`.

5. Iterate through `res` and multiply each element with `post`. Build up `post` by multiplying it with the current index.

6. Return `res`

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array twice. $O(n) + O(n) \rightarrow O(n)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We only utilize space for the resultant list and are told to exlude this.

## Code
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [0] * len(nums)
        res[0] = 1
        for i in range(1, len(nums), 1):
            res[i] = res[i-1] * nums[i-1]
        
        post = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= post
            post *= nums[i]
            
        return res
```