---
title: "1669 Merge In Between Linked Lists"
number: 1669
date: 2024-03-20
collection: leetcodesolutions
permalink: /leetcodesolutions/1669/
excerpt: Solution to [Leetcode 1669](https://leetcode.com/problems/merge-in-between-linked-lists/description/)
---
# [Problem](https://leetcode.com/problems/merge-in-between-linked-lists/description/)

# Solution
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires to merge two lists together, by inserting `list2` before the `a`th node of `list1` and having the last node of `list2` point to the `b+1`th node of `list1`. In essence this would like like: `list1_1 -> ... -> list1_a-1 -> list2_1 -> ... -> list2_end -> list1_b+1 -> ... -> list1_end`.

To accomplish this, we simply need to maintain some pointers to the proper nodes and perform our insertion by changing the `next` field of a few of the nodes. We can traverse `list1` until we reach the `a-1`th node and maintain a pointer here and then traverse until we reach the `b+1`th node and maintain another pointer here. We can then make the `a-1`th node's `next` field point to the start of `list2` and then make the last node in `list2`'s `next` field point to the `b+1`th node of `list1`. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Maintain a pointer to the head of `list1` for our return value.
2. Iterate until we reach the `a-1`th node of `list1` and maintain a pointer here.
3. Iterate until we reach the `b+1`th node of `list1` and maintain another pointer here.
4. Make the pointer to the `a-1`th node of `list1`'s `next` field point to the head of `list2`.
5. Find the last node of `list2`. Make it's `next` field point to the `b+1`th node of `list1`.
6. Return `list1`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n+m)$. We iterate through both lists in our solution.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our pointers.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        l1_head = list1

        for _ in range(a - 1):
            list1 = list1.next
        
        list1_a_prev = list1

        for _ in range(b - a + 2):
            list1 = list1.next
        
        list1_b_next = list1

        list1_a_prev.next = list2

        while list2.next:
            list2 = list2.next
        
        list2.next = list1_b_next
    
        return l1_head
```