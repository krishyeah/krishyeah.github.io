---
title: "1716 Calculate Money in Leetcode Bank"
number: 1716
date: 2023-12-06
collection: leetcodesolutions
permalink: /leetcodesolutions/1716/
excerpt: Solution to [Leetcode 1716](https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/)
---
# [Problem](https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to add up the total amount in the bank that a person deposits given the depositing amounts of starting with depositing a dollar and then increasing the deposit amount by one dollar every day, until a full week has passed after which we deposit one more than we did at the start of the previous week. This just boils down into a math solution where we are adding consecutive numbers.
 
## Approach
<!-- Describe your approach to solving the problem. -->
1. We first calculate the number of full weeks that has passed, `weeks_completed` by using trunacting division.
2. Then we add a full weeks amount per week that has passed along with an additional 7 dollars per week per additional week past the first week. We calculate the consecutive sum of numbers from 0 to the total number of weeks completed and multiply by 7 for this value.
3. Then we find the number of `extra_days` that have passed using modulus and calculate the extra money to add by using the similar consecutive numbers addition trick keeping in mind the values are higher per `week_completed`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(1)$. We perform constant time math operations for this solution.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space.

## Code
```python
class Solution:
    def totalMoney(self, n: int) -> int:
        weeks_completed = n // 7
        res = weeks_completed * 28
        res += (7 * weeks_completed * (weeks_completed - 1)) // 2

        if (n % 7):
            extra_days = n % 7
            day_1 = weeks_completed + 1
            res += ((day_1 + day_1 + extra_days - 1) * (extra_days)) // 2

        return res
```