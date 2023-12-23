---
title: "1442 Maximum Score After Splitting a String"
number: 1442
date: 2023-12-22
collection: leetcodesolutions
permalink: /leetcodesolutions/1442/
excerpt: Solution to [Leetcode 1442](https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/)
---
# [Problem](https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum score where a point is given for every `0` to the left of the split of a string, and a point is given for every `1` to the right of the split. We want to find the ideal split such that the score is maximized.

This problem is quite simple as we can just count the number of `1`'s in the string, and then add or subtract to our score as we iterate through the string and return the maximum found score.

We first start off with a score equal to the number of `1`'s in the string. Because each split of the string must have at least 1 character, we handle the first character to initialize our `score` and `max_score` variables. We then iterate through the string and add a point for every `0` that goes to the left of the split, and subtract a point for every `1` we move to the left of the split. Then we return our `max_score`.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `score` to be the count of the number of `1`'s.
2. Handle the first character prior to initializing our `max_score`.
3. Initialize `max_score` to be equal to the initial `score`.
4. Iterate through the string. Add 1 for every `0` that is now on the left of the split and subtract 1 for every `1` that is now on the left of the split. Keep track of the maximum score in `max_score` which is the maximum score that we have come across.
5. Return `max_score`

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We first iterate through the string to count the number of `1`'s. Then we iterate through the string performing constant time operations to keep track of our score. $O(n) + (O(n) * O(1)) \rightarrow O(n)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our variables.

## Code
```python
class Solution:
    def maxScore(self, s: str) -> int:
        score = s.count('1')

        if s[0] == '1':
            score -= 1
        else:
            score += 1
            
        max_score = score

        for i in range(1, len(s) - 1):
            if s[i] == "0":
                score += 1
            else:
                score -= 1
            max_score = max(max_score, score)
        
        return max_score
```