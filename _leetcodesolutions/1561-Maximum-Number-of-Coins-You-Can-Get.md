---
title: "1561 Maximum Number of Coins You Can Get"
number: 1561
date: 2023-11-23
collection: leetcodesolutions
permalink: /leetcodesolutions/1561/
excerpt: Solution to [Leetcode 1561](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/)
---
# [Problem](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem asks us to find the maximum number of coins that we will get from this game with the rules that we pick 3 piles, and get the coins from the mid-sized pile. This problem is fairly simple as we just need to count the maximum possible set of mid-sized piles and add up the sum. 

Because we are getting the mid-sized pile, we want to ensure that we pick the lowest possible pile for the person who gets the lowest, and the second highest possible pile for ourselves. During any given turn, the maximum that we can get is the second largest pile of coins. If we remove the highest and second highest as they get chosen, in the next turn, again we are left in the same situation, where the maximum number of coins that we can get is the second largest pile.

## Approach
<!-- Describe your approach to solving the problem. -->
In order to solve this problem, we just need to sort the array and add up the second largest piles for a total of `n` times, or until we catch up to the person who has been given the lowest pile in each turn.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*log(n))$. We sort the array which takes $O(n*log(n))$, then iterate through the array once which is $O(n)$. The sorting dominates.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. $O(1)$ as no extra space is needed, but the sorting takes $O(n)$ in the background. The sorting stack dominates.

## Code
```python
class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        # sort the array
        piles.sort()
        # intialize the result
        res = 0
        # two pointers, one for the lowest and one for our piles
        L = 0
        R = len(piles) - 2
        # iterate until we reach the lowest player's pile
        while L < R:
            res += piles[R]
            R -= 2
            L += 1
        # return result
        return res
```