---
title: "122 Best Time to Buy and Sell Stock II"
number: 122
date: 2023-11-07
collection: leetcodesolutions
permalink: /leetcodesolutions/122/
excerpt: Solution to [Leetcode 122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
---
# [Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to find the maximum possible profit available with multiple buying and selling of stock. We are allowed to buy and sell on the same day so we just need to add up all cases where the stock goes up on the following day.

## Approach
<!-- Describe your approach to solving the problem. -->
We check if the price of the stock is greater than it was in the previous day and add it to the total profit if it is. If the stock goes down, we don't add it to the current profit.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ as there is only 1 for loop with a constant time work in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$ we don't utilize any additional data structures and only store a variable.

## Code
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i-1]:
                profit += prices[i] - prices[i-1]

        return profit
```