---
title: "121 Best Time to Buy and Sell Stock"
number: 121
date: 2023-11-07
collection: leetcodesolutions
permalink: /leetcodesolutions/121/
excerpt: Solution to [Leetcode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
---
# [Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires finding the maximum profit within the array. The current maximum profit is the current price minus the current previously seen low.

## Approach
<!-- Describe your approach to solving the problem. -->
We only need to save two variables in order to make this algorithm work. The current resulting maximum profit and the currently known low. As we scan through the array, if we find a higher profit, we update the result, and if we've found a new low, we save that for future profit calculations.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as we do a single loop through the array with constant time operations every iteration. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ as we only save two variables.

## Code
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        lowest = prices[0]

        for price in prices:
            res = max(price - lowest, res)
            lowest = min(lowest, price)
        return res
```