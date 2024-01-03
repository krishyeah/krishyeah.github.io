---
title: "455 Assign Cookies"
number: 455
date: 2023-12-31
collection: leetcodesolutions
permalink: /leetcodesolutions/455/
excerpt: Solution to [Leetcode 455](https://leetcode.com/problems/assign-cookies/description/)
---
# [Problem](https://leetcode.com/problems/assign-cookies/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum number of children we can satisfy from a list of greedy children where each `i`th child wants at a cookie of at least `g[i]` size, and we have a list of cookies where each `j`th cookie has a size of `s[j]`.

Because we want to find the maximum number of children that we can satisfy, we want to start by satisfying the least greedy children first, since if we can satisfy the most-greedy child, we are guaranteed to satisfy a less greedy child. And there will be instances where we can satisfy a less greedy child, but not a greedy child.

Thus, we start by sorting the lists of children's greeds, `g`, and cookie sizes, `s`. We then utilize a two pointer approach to iterate through children and cookies. We continue iterating through upwards through cookie sizes, until we can assign a cookie to a child, and then find the next least-greediest child, and assign the smallest cookie that he will take.

We return when we have either run out of cookies or children to satisfy.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check if `s` has any cookies, and return 0 if not to save some time on edge cases.
2. Store the lengths of both lists for future use to speed up performance and not make repeated `len()` calls.
3. Sort the list of children's greed, `g`, and cookies sizes, `s` so that we can assign the smallest acceptable cookie to the least greediest child and work our way updwards from there.
4. Start iterating through cookies and children. If we can assign a cookie to a child, increment `content_children`, which tracks the number of satisfied children, and `cookie_pointer` which keeps track of the next smallest cookie. If the cookie cannot be assigned as it is too small, increment only `cookie_pointer` to look at the next smallest cookie.
5. Return the number of content children when we have run out of cookies or all children have been satisfied.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n)+m*\log(m))$. We sort both lists and as they are of different sizes and we are not guaranteed which is larger, we include both in our time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n+m)$. Sorting takes stack space during the internal operations of linear size in Python.

## Code
```python
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        if not s:
            return 0

        s_length = len(s)
        g_length = len(g)

        g.sort()
        s.sort()

        content_children = 0
        cookie_pointer = 0
        
        while cookie_pointer < s_length and content_children < g_length:
            if s[cookie_pointer] >= g[content_children]:
                content_children += 1
            cookie_pointer += 1
        return content_children
```