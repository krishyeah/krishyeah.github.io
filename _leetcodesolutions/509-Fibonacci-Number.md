---
title: "509 Fibonacci Number"
number: 509
date: 2024-01-02
collection: leetcodesolutions
permalink: /leetcodesolutions/509/
excerpt: Solution to [Leetcode 509](https://leetcode.com/problems/fibonacci-number/description/)
---
# [Problem](https://leetcode.com/problems/fibonacci-number/description/)

# Solution 1 - Recursion
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The initial intuition to solve this problem is to utilize what we know about Fibonacci numbers in that each Fibonacci number is the sum of its previous two numbers in the sequence. In this way, we can recursively call our `fib(n)` function after setting our base case of `fib(0) = 0` and `fib(1) = 1`. Typically the first number of the sequence is presented as 1, and the second is presented as 1 as well; however, we can extend this solution to make the 0th number in the sequence to be 0.

This function will recursively work up the sums from bottom up until we finally reach our last solution.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Set up our base cases of `fib(0) = 0` and `fib(1) = 1`.
2. Recursively return the sum of the previous two numbers in the sequence.
3. Once all recursive calls are made, the final return will send the answer to the driver function.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(2^n)$. We create a lot of recursive calls which exponentially grow as we work our way towards our base cases. We create two calls per split and perform 1 split per decrement to our original `n`, thus we have 2^n total calls.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(2^n)$. Our recursion uses space with our max space used being the total number of active calls that may exist at once. The last level of the tree will be 2^n in width and thus our space used is exponentially proportional to the input.

## Code
```python
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        
        return self.fib(n-1) + self.fib(n-2)
```

# Solution2 - Dynamic Programming (Linear Space)
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Instead of using recursion and working our way down the recursive chain, we can work our way up by calculating the `i`th fibonacci number until we reach `n`.

We can create an array to store the numbers and then add consecutive numbers starting with our base cases of `fib(0) = 0` and `fib(1) = 1`.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create an array of length `n + 1` to store our fibonacci numbers.
2. Set the base cases for the first two entries in the array.
3. Iterate through the array making each entry the sum of the previous two entries.
4. Return the last number which is the `n`th fibonacci number.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each entry in our `n`-sized array performing constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize an array of size `n`.

## Code
```python
class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n

        dp = [0 for _ in range(n+1)] 
        dp[1] = 1
        
        for i in range(2,len(dp)):
            dp[i] = dp[i-1] + dp[i-2]
        
        return dp[n]
```

# Solution 3 - Dynamic Programming (Constant Space)
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution again builds on the previous one by recognizing that any instance, the only numbers that are in use are `dp[i]`, `dp[i-1]`, and `dp[i-2]`. We can therefore simply overwrite these variables and reduce the total amount of space used.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Solve the base cases.
2. Set `prev` to 0 and `curr` to 1.
3. Iteratively add the two numbers together and use a temporary variable or python's tuple unpacking which allows simulatenous assignment of variables.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We again iteratively build up our solution by counting upwards `n` times and performing constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We only utilize a few variables so this uses constant space.
## Code
```python
class Solution:
    def fib(self, n: int) -> int:
        # DP (Time: O(n), Space: O(1))
        if n <= 1:
            return n
        prev = 0
        curr = 1
        for i in range(n):
            prev, curr = curr, prev + curr
        
        return prev
```