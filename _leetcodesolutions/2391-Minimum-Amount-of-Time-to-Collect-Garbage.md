---
title: "2391 Minimum Amount of Time to Collect Garbage"
number: 2391
date: 2023-11-20
collection: leetcodesolutions
permalink: /leetcodesolutions/2391/
excerpt: Solution to [Leetcode 2391](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/)
---
# [Problem](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a relatively easy problem when we understand what the question is really looking for. The question is asking us for the time it takes to pick up garbage from houses given a certain set of travel times between houses and a flat time required to pick up a unit of garbage from each house. There are three types of garbage each picked up by a different type of truck. The trucks do not travel simulatneously and thus the times must be added up. Each unit of trash takes 1 minute to pick up and we only need to travel from the first house to the last house which contains the matching garbage type so we do not need to include travel to houses after the last type of garbage has been picked up.

## Approach
<!-- Describe your approach to solving the problem. -->
Because the pickups do not happen simultaneously, we need to add up travel times and individual trash items separately. This can be done by adding up the total number of units of trash at a house and then keeping track of the last house each truck needs to visit, by adding up these pieces of information, we have our resulting total time.
The algorithm is as follows:
1. Iterate through each house in the neighborhood.
2. Add 1 minute of time per unit of trash at the house
3. For each type of trash at the house, store the house as the last house of each applicable trash type so we maintain a log of how far trucks must go.
4. Add up travel times for each truck to go to their final destination.

 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$.
We loop through all houses a max of 4 times and do constant work for each.
$4*O(n) \rightarrow O(n)$ 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$.
We store a variable and introduce no new data structures.

## Code
```python
class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        res = 0
        lastP = lastG = lastM = 0

        for i in range(len(garbage)):
            res += len(garbage[i])
            if 'P' in garbage[i]:
                lastP = i
            if 'G' in garbage[i]:
                lastG = i
            if 'M' in garbage[i]:
                lastM = i

        for i in range(lastP):
            res += travel[i]
        for i in range(lastG):
            res += travel[i]
        for i in range(lastM):
            res += travel[i]
        
        return res
```