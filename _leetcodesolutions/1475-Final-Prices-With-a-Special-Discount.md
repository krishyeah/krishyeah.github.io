---
title: "1475 Final Prices With a Special Discount in a Shop"
number: 1475
date: 2025-12-02
collection: leetcodesolutions
permalink: /leetcodesolutions/1475/
excerpt: Solution to [Leetcode 1475](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/)
---
# [Problem](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to apply discounts to the price of items in a store by taking the next lower price we see and subtracting that from the price of the current item. Essentially we are looking for the earliest cheaper item which we can use to discount the value of the current item.

If we think about what this would look like for an array with `[6,8,2]`. We would apply a discount of `2` to both the 1st and 2nd items. So we want some way of storing the previously seen items until we find something cheaper, and then apply the discounts. We can use a stack for this as we can simply store the indices of each item in the stack, and because we are only going to input the indices of prices that are greater than the preceeding price in the stack, when we run into a smaller number, we can continue popping off of the stack until the stored index leads to a lower price than the current price, or the stack is empty.

## Approach
<!-- Describe your approach to solving the problem. -->
1. We copy the array for performing our operations on.
2. We initialize a stack for keeping track of indices of prices that we have not yet seen a lower price than.
3. For each price in the `prices` list, if the stack has items, we check to see if the top index (corresponding to the maximum price we have previously not operated on) is greater than the current price. If the current price is lower than the previously seen price, we pop it's index from the stack, and modify its value by the discount in our `ans` array. We continue checking and popping until the current value is either greater than previously seen prices, or we have operated on all of the previous indices.
4. We add the current index to the stack.
5. We return our operated on resultant array when we have iterated through all of the prices.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire array once and perform constant time operations on each iteration. Each index gets added to the stack only once and we perform constant time checks, thus it is a linear run time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize linear space for storing our results.

## Code
```python3 []
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        ans = prices[:]
        stack: List[int] = []
        
        for i, p in enumerate(prices):
            while stack and p <= prices[stack[-1]]:
                j = stack.pop()
                ans[j] = prices[j] - p
            stack.append(i)

        return ans
```