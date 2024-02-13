---
title: "2108 Find First Palindromic String in the Array"
number: 2108
date: 2024-02-12
collection: leetcodesolutions
permalink: /leetcodesolutions/2108/
excerpt: Solution to [Leetcode 2108](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/)
---
# [Problem](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the first palindromic string from an array of strings. If there are no palindromic strings in the array, we return an empty string.

This problem is very straightforward as we are simply checking each word in left to right order to see if they are palindromic. We can create a function to handle checking if each word is a palindrome and return the result to our main function which in turn will return the palindromic word, or an empty string if no such word is found.

For checking for a palindromic string, we take a string and create a left pointer at the first index of the word and a right pointer at the last index of the word. While the pointers have not crossed, we ensure that the first and last letters are the same, and then we move the pointers inwards to check the next pair of letters. We continue until the pointers cross indicating the word is a palindrome, or until the pointers point towards different letters indicating the word is not a palindrome. We return the appropriate boolean value.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a sub-routine for checking whether words are palindromes. We check the first and last letter to ensure they are the same and work the pointers in towards the middle. Return true if the pointers cross, or false if we reach a pair of letters which are not the same.
2. Iterate through each word in the given list and return the word if it is palindromic. Return an empty string if we iterate through all words and do not find any palindromic strings.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*k)$. We iterate through each of words once, ($O(n)$), and perform an $O(k)$ operation on each word while checking if it is palindromic. $O(n) * O(k) \rightarrow O(n*k)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space while checking for palindromic strings in the array.

## Code
```python
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        
        def isPalindromic(word: str) -> bool: 
            L, R = 0, len(word) - 1

            while L < R:
                if word[L] != word[R]:
                    return False
                L += 1
                R -= 1

            return True

        for word in words:
            if isPalindromic(word):
                return word

        return "" 
```