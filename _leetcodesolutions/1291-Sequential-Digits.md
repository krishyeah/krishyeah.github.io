---
title: "1291 Sequential Digits"
number: 1291
date: 2023-02-02
collection: leetcodesolutions
permalink: /leetcodesolutions/1291/
excerpt: Solution to [Leetcode 1291](https://leetcode.com/problems/sequential-digits/description/)
---
# [Problem](https://leetcode.com/problems/sequential-digits/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find how many sequential integers are in between the `low` and `high` bounds provided. A sequential integer is an integer which has sequential digits, e.g.: 1234 and 3456. We want to return a sorted list of all sequential numbers that are inbetween the inclusive bounds.

This problem is fairly simple as there are only so many sequential numbers. In order to find the numbers, we can write out the largest possible sequential string which is `'123456789'`. We then can utilze two pointers to track the left and right of the current string and check to see if the integer formed is between the bounds. We increase the gap between the pointers after moving the sliding window across the string to check the larger integers with more digits. The first integer we come across which is higher than the high bound indicates that we are finished with checking as all future numbers will be larger because we will either be sliding the window to an integer which will have a higher starting number, or we will be increasing the length of the integer which will be a larger number.

Because of our pattern of iterating through numbers, we are guaranteed to add numbers to our result list in increasing order and thus we do not need to sort the final array for submission.
 
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our result list, `res`.
2. Create a string containing the largest sequence of sequential numbers
3. Initialize our gap indicating the length of integer we are currently looking at, our left pointer which indicates the starting number of our integer, and our right pointer which indicates the last number of our integer.
4. We iterate 9 times as there are 9 lengths of possible integers.
5. We create an inner loop which loops while the right pointer does not go out of bounds for our slicing. As we choose higher integers, we will use less iterations.
6. We convert the slice of the string pointed to by our pointers into an integer for checking against the upper and lower bounds. If it is between the bounds we add it to our result list. If it is higher than our bounds, we return our result list as all future numbers will be greater.
7. We move our left pointer up one to check the next greater sequential number of the same length. If moving up will push us out of bounds for our slicing, we move the left pointer back to 0 and increase the gap which increases the length of the integer that we are currently checking.
8. We return our result if we complete iterating through all possible numbers and have not returned yet for choosing a number higher than our `high` bound.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(1)$. Even though we are utilizing nested for loops, the size of the loops is bounded by the largest possible integers that we can create. Because there are only a small number of sequential numbers that we can create, even if the bounds go towards infinite, our loops will complete once we have checked the possible sequential numbers.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for the creation of our string.

## Code
```python
class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        res = []

        sequentialNumbers = '123456789'

        gap = 0
        L = 0
        R = L + gap + 1

        for _ in range(9):
            while L + gap + 1 <= 9:
                R = L + gap + 1
                curInt = int(sequentialNumbers[L:R])
                if curInt >= low and curInt <= high:
                    res.append(curInt)
                elif curInt > high:
                    return res
                L += 1
            L = 0
            gap += 1
            R = L + gap + 1

        return res
```