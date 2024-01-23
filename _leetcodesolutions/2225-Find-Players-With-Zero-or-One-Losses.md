---
title: "2225 Find Players With Zero or One Losses"
number: 2225
date: 2024-01-03
collection: leetcodesolutions
permalink: /leetcodesolutions/2225/
excerpt: Solution to [Leetcode 2225](https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/)
---
# [Problem](https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a sorted list of players that have either exactly zero or one losses. This is a fairly simple problem as we can utilize the quick look up times of a set datastructure in order to keep track of all of the players and their current statuses.

We utilize a set to keep track of those we have seen who have exactly zero losses, `zero_loss`, another to keep track of those we have seen who have exactly one loss, `one_loss`, and lastly another to keep track of those we have seen who have multiple losses `more_losses`. We iterate through each match and add the winner to `zero_loss` if we have not seen them to have a loss before, and then move the loser down one category of losses.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize three sets to keep track of players with zero, one or more losses, `zero_loss`, `one_loss`, and `more_losses` resspectively.
2. Iterate through each match. Place the winner in `zero_loss` if they have not been seen to have a previous loss. Demote the loser one category if they have been seen before, or add them to `one_loss` if we are seeing them for the first time.
3. Convert the `zero_loss` and `one_loss` sets into lists and return a sorted version of both lists. 

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each match once and perform a constant time set of operations on each match.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We store each player of each match in one of our three sets and thus utilize a linear space complexity.

## Code
```python
class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        zero_loss = set()
        one_loss = set()
        more_losses = set()
        
        for winner, loser in matches:
            if (winner not in one_loss) and (winner not in more_losses):
                zero_loss.add(winner)
            if loser in zero_loss:
                zero_loss.remove(loser)
                one_loss.add(loser)
            elif loser in one_loss:
                one_loss.remove(loser)
                more_losses.add(loser)
            elif loser in more_losses:
                continue
            else:
                one_loss.add(loser)          
            
        return [sorted(list(zero_loss)), sorted(list(one_loss))]
```