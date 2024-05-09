---
title: "713 Subarray Product Less Than K"
number: 713
date: 2024-03-30
collection: leetcodesolutions
permalink: /leetcodesolutions/713/
excerpt: Solution to [Leetcode 713](https://leetcode.com/problems/subarray-product-less-than-k/description/)
---
# [Problem](https://leetcode.com/problems/subarray-product-less-than-k/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the number of subarrays from a given array that have a prodcut that is strictly less than the given number.

To solve this we use a two pointer approach. If, for every number, $a_j$, in the arary, we find the longest valid subarray that ends at $a_j$ and starts at any $a_i$ where $i < j$, then there are $j - i + 1$ valid subarrays within this longest such subarray. We can utilize two pointers to find the product of numbers within the pointers and move the left pointer forward to make our subarray valid and move the right pointer when we want to advance to the next set of subarrays. By adding the total number of subarrays between the pointers that ends at the subarray, we can find the result to this question.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Return 0 for the case where the target is less than or equal to 1 as our input numbers are all greater than or equal to 1.
2. Start our left pointer at zero, we utilize a for loop for the right pointer, but can also utilize a while loop with incrementing. Initialize our result as 0 and initialize the current product as 1.
3. For each number, multiply the new number added by our right pointer. Then decrease the product by moving the left pointer while the product is gerater than the target.
4. The total number of subarrays that end with the number pointed to by the right pointer is equal to the numbers inclusive of the pointers so we add this to the result.
5. Return the result when we have added all valid subarrays.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. Our pointers iterate through the array once.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. Our pointers utilize constant space.

## Code
```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        
        res = left = 0
        cur = 1

        for right in range(len(nums)):
            cur *= nums[right]
            while cur >= k:
                cur //= nums[left]
                left += 1
            res += right - left + 1
        
        return res
```