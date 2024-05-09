---
title: "2073 Time Needed To Buy Tickets"
number: 2073
date: 2024-04-26
collection: leetcodesolutions
permalink: /leetcodesolutions/2073/
excerpt: Solution to [Leetcode 2073](https://leetcode.com/problems/time-needed-to-buy-tickets/description/)
---
# [Problem](https://leetcode.com/problems/time-needed-to-buy-tickets/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the total amount of time requried for person `k` to buy all of their tickets.

To solve this problem, we can simply consider logically what is occurring when person `k` finally buys all of their tickets. Everyone in front of them will have bought either `tickets[k]` or `tickets[i]` whichever is less as they will either buy all of their needed tickets and leave, or continue staying in line after person `k` leaves which is when our simulation ends. Everyone behind person `k` will buy `tickets[i]` or `tickets[k] - 1` whichever is less because they will get one less turn than person `k` who goes first and will buy either one less than person `k` when they leave, or buy all of their tickets and leave the simulation.

This creates a mathematical approach to solving this problem without actually needing to run the simulation of ticket purchases.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Account for all of person `k`'s tickets as this is when the simulation ends and initialize our result, `res`, to `tickets[k]`
2. For every person in front of `k`, they will buy either all of their ticket needs, or as many as person `k` needs prior to the simulation end which ever is less. Add `min(tickets[i], tickets[k])` to our result.
3. For every person behind `k`, they will buy either all of their ticket needs, or one less than `k`'s needs as `k` will have bought 1 ticket prior to their turn, whichever is less. Add `min(tickets[i], tickets[k] - 1)` to our result.
4. Return our result.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire list and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        res = tickets[k]

        for i in range(k):
            res += min(tickets[i], tickets[k])
        
        for i in range(k+1, len(tickets)):
            res += min(tickets[i], tickets[k] - 1)
    
        return res
```