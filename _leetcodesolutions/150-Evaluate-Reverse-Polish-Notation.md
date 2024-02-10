---
title: "150 Evaluate Reverse Polish Notation"
number: 150
date: 2024-01-30
collection: leetcodesolutions
permalink: /leetcodesolutions/150/
excerpt: Solution to [Leetcode 150](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)
---
# [Problem](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to evaluate reverse polish notation (RPN). To perform math using RPN, when we see an operator, we apply its arithmetic operation on the last two seen numbers. Due to this property, using a stack seems very intuitive as we want to utilize a "last in, first out" data structure to always utilize the latest two numbers that we have seen.

We use a stack to store the numbers that come in and upon seeing any operator, we pop the two values in order to perform the operation. The two slightly special cases are in the case of subtraction, we add the negative of the first number popped with the second number as the first number popped should go on the right side of the operator. With division, we also would like to put the first number popped on the right side of the operator and thus, we utilize two variables for keeping track of the numbers as we pop them. We also use an `int()` conversion to truncate the value towards zero.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our stack using a list.
2. Iterate through the tokens. If the token is not an operator, we convert it to an int and push it to the stack. If the token is an operator, we apply the arithmetic operation taking into account that the first number that is popped should appear on the right of the operand. Push the result to the stack for use in the next operation.
3. Return the remaining number in the stack which is our result.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each item in `tokens` and perform constant time operations on each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a stack which will utilize linear space in the worst case.

## Code
```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for token in tokens:
            if token == '+':
                stack.append(stack.pop() + stack.pop())
            elif token == '-':
                stack.append(-stack.pop() + stack.pop())
            elif token == '*':
                stack.append(stack.pop() * stack.pop())
            elif token == '/':
                divisor = stack.pop()
                dividend = stack.pop()
                stack.append(int(dividend / divisor))
            else:
                stack.append(int(token))
        
        return stack[0]
```