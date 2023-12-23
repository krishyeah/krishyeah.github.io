---
title: "128 Longest Consecutive Sequence"
number: 128
date: 2023-12-20
collection: leetcodesolutions
permalink: /leetcodesolutions/128/
excerpt: Solution to [Leetcode 128](https://leetcode.com/problems/longest-consecutive-sequence/description/)
---
# [Problem](https://leetcode.com/problems/longest-consecutive-sequence/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the length of the longest consecutive sequence in an array. We are also required to solve the problem in an $O(n)$ time complexity solution. This requirement disallows the trivial $O(n*log(n))$ solution of sorting the array first, and then just iterating through while counting the sequence lengths for all consecutive sequences in the array.

To solve this solution in a single scan of the array, we use the obvious fact that the longest consecutive sequence will use the full length of a consecutive sequence. This means that for every sequence, we want to find the smallest number to start with. We can do this by utilizing some extra space for easy look-up of the elements. We can use a set since even if there are repeated elements, we can pick which elements are used for the consecutive sequence and do not need to stop a sequence due to multiples of a certain element. We put all the numbers into a set, and then start iterating through the numbers in the array. If the consecutively smaller number is not in the set, we know we have found the smallest number of the current sequence and check the count of consecutive elements using this starting element. We retain the longest currently found consecutive sequence length and return this result after scanning through the whole array.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a hashset, `coll`, for constant time lookup of numbers in `nums`
2. Iniitalize `res` to 0.
3. Iterate through the elements in `nums`. For each number, if it is the smallest number in a sequence, i.e.: the previous number is not in `coll`, we start counting upwards while consecutively larger elemnts are found in `coll`. We retain the largest length of a currently found consecutive in our result `res`.
4. Return `res`

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array once performing constant time operations during each iteration. The counting of the sequences will result in each element being iterated over again once more. Therefore, this is not $O(n^2)$, but $O(n)+O(n) \rightarrow O(n)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We save all variables in a hashset. This will take up at maximum a space of $n$.

## Code
```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        coll = set(nums)
        res = 0

        for num in nums:
            if num - 1 not in coll:
                cur = 1
                while num + cur in coll:
                    cur += 1
                res = max(cur, res)
        return res
```