---
title: "2610 Covert an Array Into a 2D Array With Conditions"
number: 2610
date: 2024-01-02
collection: leetcodesolutions
permalink: /leetcodesolutions/2610/
excerpt: Solution to [Leetcode 2610](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/)
---
# [Problem](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a matrix made from a list such that each row contains unique integers.

My initial approach was to iterate through the `nums`, the list of numbers we are given, while keeping track of previously used indices to avoid using a certain number twice and keeping track of the numbers used for the current pass to ensure they remain unique. This can be managed with two sets; however, the time complexity is $O(n^2)$ in the worst case as if every number was the same, we would require `n` passes, but also continue checking each of `n` numbers during each pass.

We can build upon the logic by simply counting the frequency of each element in `nums` so that we know how many total rows we will need to add to our `result`. Because the largest integer is bounded by the length of `nums` (i.e.: `nums[i] <= len(nums)`), we can create a frequency array of size `len(nums) + 1` to track the frequency of each integer that we may come across. The first time we see an integer, we add it to the first row, for every future instance, if there does not already exist a row to handle the increased frequency, we create a row in result, and then append our number to that row. In a single pass, we can populate each row as needed to meet our criteria. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create an array, `freq`, to track the previously seen frequency of each number in `nums`.
2. Create our result matrix, `result`.
3. Iterate through each number in `nums`. If the previously seen frequency is larger than the number of rows in `result`, add a new row to handle our new highest frequency number. Add the number to the row in `result` based on what frequency the number has been seen. Update the previously seen frequency for that number.
4. Return `result`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We do a single pass through nums performing constant time operations per step.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We create a frequency array with size proportional to our input size.

## Code
```python
class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        freq = [0] * (len(nums) + 1)
        result = []

        for c in nums:
            if freq[c] >= len(result):
                result.append([])
            
            result[freq[c]].append(c)
            freq[c] += 1

        return result
```