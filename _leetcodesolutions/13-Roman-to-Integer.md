---
title: "13 Roman to Integer"
number: 13
date: 2023-02-07
collection: leetcodesolutions
permalink: /leetcodesolutions/13/
excerpt: Solution to [Leetcode 13](https://leetcode.com/problems/roman-to-integer/description/)
---
# [Problem](https://leetcode.com/problems/roman-to-integer/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the integer representation of a roman numeral. This is a fairly straightforward task as the rules of roman numerals are quite simple. A roman numeral is read left-to-right and if a smaller number preceeds a larger number, it is subtracted from the larger number. We are also guaranteed that the input will be a valid roman numeral, so we can further rely on the roman numeral rules and save ourselves the effort of needing to check for validity.

Because a smaller number preceeding a larger number is subtracted from the larger number before they are both added to the sum, if we find a smaller number preceeding a larger number, we can simply subtract it from the current result and continue building up our answer as roman numerals are built up through addition of all of the characters. We simplify our code by creating a dictionary to handle our conversion of roman numeral to integers and then process each numeral by checking to see if it preceeds a larger numeral or not and adding or subtracting appropriately.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a dictionary, `conversion`, to handle the conversion of numerals to integers.
2. Initialize our result variable, `res`, to 0.
3. Iterate through each character in the numeral. For each character, if it preceeds a numerically larger roman numeral, we subtract the character from our result, otherwise, we add the character. The last character is always added as it cannot preceed any other characters.
4. Return our result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire string and perform constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our conversion dictionary and result variable.

## Code
```python
class Solution:
    def romanToInt(self, s: str) -> int:
        conversion = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

        res = 0

        for i in range(len(s)):
            if i + 1 < len(s) and conversion[s[i]] < conversion[s[i + 1]]:
                res -= conversion[s[i]]
            else:
                res += conversion[s[i]]
        
        return res
```