---
title: "2870 Minimum Number of Operations to Make Array Empty"
number: 2870
date: 2024-01-04
collection: leetcodesolutions
permalink: /leetcodesolutions/2870/
excerpt: Solution to [Leetcode 2870](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/)
---
# [Problem](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the minimum number of operations required to remove all integers from a list. We remove integers by removing either pairs or triplets of the same integer.

The options for our operations are:
1. Remove a pair of matching items
2. Remove a triplet of matching items

If we cannot perform these operations to remove all items, we return -1.

This problem is mostly a math problem than it is a coding challenge. Our greedy approach would be to divide by three as many times as possible and then remove the required number of pairs to remove an integer. If we sketch this out we would find the pattern and what our solution should be. If the total number of occurences of an integer, `count`, is divisible by three, our answer will be `count/3`. If it is two larger than a multiple of three, our answer is `count/3 + 1` as we require one of the pair removal operations. If it is only one larger, we do one less of triplet operations and perform two of the pair operations. This results in `count/3 - 1 + 2` operations which simplifies to `count/3 + 1`. We see that our answer is always `count/3` or `count/3 + 1`. This allows us to easily find the result by using `math.ceil(count/3)` as we round up our answer for another operation if there is a remainder when dividing by 3. We find the operations required for each unique integer and return our total.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our result, `min_ops`, as 0.
2. Create a dictionary for storing the total counts of each integer, `counts`.
3. Iterate through `nums` and increment the count of each `num` in `nums` in our dictionary, `counts`.
4. Iterate through each of the keys in `counts`. If there is only 1 instance of an integer, we return -1 as there is no solution. Otherwise, we perform our calculation of `math.ceil(counts[num]/3)` and add this to our total, `min_ops`.
5. Return our result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number once and perform a constant time operation on each iteration which has a time complexity of $O(n)$. We then iterate through the unique numbers which also has a worst time complexity of $O(n)$. $O(n) + O(n) \rightarrow O(n)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We create a dictionary to house every unique integer and its count which has a worst space complexity of $O(n)$.

## Code
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        min_ops = 0

        counts = defaultdict(int)

        for num in nums:
            counts[num] += 1
        
        for num in counts:
            if counts[num] == 1:
                return -1
            min_ops += ceil(counts[num] / 3)
        
        return min_ops
```