---
title: "1688 Count of Matches in Tournament"
number: 1688
date: 2023-12-05
collection: leetcodesolutions
permalink: /leetcodesolutions/1688/
excerpt: Solution to [Leetcode 1688](https://leetcode.com/problems/count-of-matches-in-tournament/description/)
---
# [Problem](https://leetcode.com/problems/count-of-matches-in-tournament/description/)

# Solution 1 - O(log(n)) Math
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to count the number of games until the tournament is completed. There are `n` teams completing and if there are an odd number of teams, one of the teams will receive a bye and will automatically move forward. After each round, we have half of the teams that started, plus 1 if there were an odd number of teams in the previous round.

## Approach
<!-- Describe your approach to solving the problem. -->
We continue dividing the population by two, taking care of the one team that receieves a bye if there are an odd number of teams. We count the number of games played until there is only 1 team remaining.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(log(n))$. We divide the population by 2 every round and therefore the time complexity is logarithmic and better than linear.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We don't utilize any additional data structures or stack space.

## Code
```python
class Solution:
    def numberOfMatches(self, n: int) -> int:
        if n == 1:
            return 0
        res = 0
        while n > 1:
            if n % 2 == 0:
                res += n / 2
                n /= 2
            else:
                res += n // 2
                n = (n + 1) / 2
        
        return int(res)
```

## Solution 2 - O(1) Logic
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are `n` teams competing. Each game taking individually has 1 team exit the tournament. We stop the tournament when only 1 team is remaining. Therefore, the total number of teams exiting is `n - 1` and that is how many games are needed to complete the tournament.

## Approach
<!-- Describe your approach to solving the problem. -->
Return `n - 1` as the answer.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do a single constant time operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We don't utilize any additional data structures or stack space.

## Code
```python
class Solution:
    def numberOfMatches(self, n: int) -> int:
        return n - 1
```