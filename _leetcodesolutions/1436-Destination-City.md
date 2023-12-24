---
title: "1436 Destination City"
number: 1436
date: 2023-12-15
collection: leetcodesolutions
permalink: /leetcodesolutions/1436/
excerpt: Solution to [Leetcode 1436](https://leetcode.com/problems/destination-city/description/)
---
# [Problem](https://leetcode.com/problems/destination-city/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the destination city in a list of paths from one city to another. We are guaranteed to have a destination city so we must find the city which has no outgoing paths and only an incoming path. This problem is quite simply in the representation of the paths that we are given since it is a linear path and therefore there are no branches that we need to keep track of.

We can loop through all the paths once and add all of the starting cities to a hashset for easy lookup. If a city is in the `start` set, then we don't consider it for a `destination` city. If a city is later found to be a `start` city, we remove it from the `destination` set. Otherwise, we add the `destination` city to the `destination` set.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create `start` and `destination` sets to keep track of cities that have been seen.
2. Iterate through all cities.
    - Add the starting city to `start` set.
    - If the starting city was in `destination` set, remove it.
    - Add the destination city to `destination` set if it is not in `start` set.
3. Return the guaranteed single item that is in the `destination` set.


## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through all paths only once and do constant time operations on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store all cities in sets. Each path has two cities so we have a maximum storate of $O(n/2) \rightarrow O(n)$.

## Code
```python
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        start = set()
        destination = set()
        for path in paths:
            start.add(path[0])
            if path[0] in destination:
                destination.remove(path[0])
            if path[1] not in start:
                destination.add(path[1])
        return list(destination)[0]
```