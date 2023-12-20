---
title: "2706 Buy Two Chocolates"
number: 2706
date: 2023-12-19
collection: leetcodesolutions
permalink: /leetcodesolutions/2706/
excerpt: Solution to [Leetcode 2706](https://leetcode.com/problems/buy-two-chocolates/description/)
---
# [Problem](https://leetcode.com/problems/buy-two-chocolates/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the cheapest two chocolates that we can buy and return the difference between the money we have and the sum of the two chocolates given that we can buy both of them without going into debt. If we must go into debt, we return the amount of money that we started with. Thus, we always return a non-negative number, either signalling that we bought no chocolates, or the remainder of our money after buying the two cheapest chocolates.

The easiest solution is to sort the prices and then return the result of our attempts to purchase the two cheapest chocolates which will be at the front of the array after sorting. This has an $O(n*log(n))$ time complexity due to the sorting, plus the stack space used by the sorting algorithm may also count for $O(n)$ against your space complexity depending on the interviewer.

The alternative approach is to track the two cheapest chocolates that we have seen hwile we iterate through the array. During each iteration we either update both variables tracking the cheapest chocolates if we have found a new cheapest chocolate, or we only update the variable tracking the second cheapest if we have found a new second cheapest chocolate. If we initially set our variables to be higher than the highest possible value based on the contraints, we can find the two cheapest chocolates in $O(n)$ time in 1 iteration while utilizing $O(1)$ or constant additional space.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `cheap1` and `cheap2` to track the cheapest and second cheapest chocolates that we have currently seen.
2. Iterate through each price of chocolates. For each iteration if the price is the new cheapest price, we set `cheap1` to the new cheapest price and `cheap2` to the previously cheapest price. If the price is the new second cheapest price, we update `cheap2` to the new second cheapest price.
3. After we have iterated through all items, if the difference between our `money` and the total price is non-negative, we return the difference. Otherwise, we return `money`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array once and perform constant time operations in each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space.

## Code
```python
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        cheap1 = cheap2 = 101

        for price in prices:
            if price < cheap1:
                cheap1, cheap2 = price, cheap1
            elif price < cheap2:
                cheap2 = price
        
        if money - (cheap1 + cheap2) >= 0:
            return money - (cheap1 + cheap2)
        else:
            return money
```