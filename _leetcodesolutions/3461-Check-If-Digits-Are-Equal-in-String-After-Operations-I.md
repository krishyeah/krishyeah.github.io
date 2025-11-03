---
title: "3461 Check If Digits Are Equal in String After Operations I"
number: 3461
date: 2025-10-24
collection: leetcodesolutions
permalink: /leetcodesolutions/3461/
excerpt: Solution to [Leetcode 3461](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/description/)
---
# [Problem](https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/description/)

# Solution 1 - Pascal's Triangle ($O(n^2)$)
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether after adding up the digits and mod'ing by 10, whether the last two remaining digits will be equal to each other.

If we simulate through this problem as the example shows, we can see how the approach of adding numbers works requiring a lot of computations to solve. The simulation actually requires more code to complete than the optimized solution of Pascal's triangle! While adding these numbers up, we can see how there is some repition in their calculations.
 
```
3       9     0     2
   3+9    9+0   0+2
     3+9+9+0   9+0+0+2
       21        11
21 % 10 = 1
11 % 10 = 1
Return True
```

If we try to understand this repetition by using multiplication when the numbers are repeating, we can begin to see the pattern.

```
3         9         0         2
  1*3+1*9   1*9+1*0   1*0+1*2
   1*3+2*9+1*0   1*9+2*0+1*2
       21            11
21 % 10 = 1
11 % 10 = 1
Return True
```

We can see the coefficients of 1, 2, 1. If we do this on the larger example provided with the extra digits, we can see the next row of Pascal's triangle. We can split the string into its first `n-1` and last `n-1` character components because as the previous example shows, the first resultant sum only has components from the first `n-1` digits and the second resultant sum only has components from the last `n-1` digits. It then becomes clear to see that we can split the string into the first `n-1` digits and the last `n-1` digits, calculate the Pascal coefficient for each number, add the numbers together, and then take mod 10 of the final sum.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Split the strings into the first and last `n-1` length strings.
2. For each string, calculate the resultant sum by finding the Pascal number of the digit `i` and multiplying it with its corresponding character (`s1[i]` or `c` if we use `enumerate()`) and then adding that to the sum
3. Check if the resultant sums mod 10 are equal to each other and return True if they are or False if they are not

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n^2)$. The solution seems linear, but `math.comb()` runs in $O(n)$ in the worst case so we have $O(n) * O(n) = O(n^2)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize some additional helper variables, but with a fixed size.

## Code
```python3 []
class Solution:
    def hasSameDigits(self, s: str) -> bool:
        s1 = s[:-1]
        s2 = s[1:]
        n = len(s)
        s1_sum = 0
        s2_sum = 0

        for i, c in enumerate(s1):
            s1_sum += math.comb(n - 2, i) * int(c)

        for i, c in enumerate(s2):
            s2_sum += math.comb(n - 2, i) * int(c)

        return s1_sum % 10 == s2_sum % 10

```

# Solution 2 - Optimized Pascal's Triangle ($O(n)$)
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem utilizes the same solution, but optimizes the Pascal's coefficient by looking at the math underneath the $math.comb()$ function.

The $k$th digit in a row of length $n$ has a coefficient of `math.comb(n, k)`. This equates to $\frac{(n-1)!}{k!*(n-1-k)!}$. When we go to digit $k+1$, we are basically creating the following equation $\frac{(n-1)!}{(k+1)*k!*\frac{((n-1)-k)!}{n-1-k}}$. This might seem like a complicated equation, but essentially to the **denominator**, we multiply $k+1$ and divide by $n-1-k$ because these terms are included or removed from the new factorial calculations. Using this, we can increment our coefficients manually which removes the need to continuously calculate the full factorial as the factorial multiplication is $O(n)$ in time.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Split the strings into the first and last `n-1` length strings.
2. For each string, calculate the resultant sum by finding the Pascal coefficient of the digit `i` and multiplying it with its corresponding character (`s1[i]`) and then adding that to our resultant sum
3. Perform coefficient math to prepare for the next number
4. Check if the resultant sums mod 10 are equal to each other and return True if they are or False if they are not

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We condensed our factorial into a constant time equation so we have a few constant time calculations within a loop of size $O(n)$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize some additional helper variables, but with a fixed size.

## Code
```python3 []
class Solution:
    def hasSameDigits(self, s: str) -> bool:
        s1 = s[:-1]
        s2 = s[1:]
        n = len(s)
        s1_sum = 0
        s2_sum = 0

        coeff = 1
        s1_sum = 0
        s2_sum = 0

        for i in range(n - 1):
            s1_sum += coeff * int(s1[i])
            s2_sum += coeff * int(s2[i])
            coeff = coeff * (n - 2 - i) // (i + 1)

        return s1_sum % 10 == s2_sum % 10

```