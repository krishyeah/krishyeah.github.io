---
title: "2 Add Two Numbers"
number: 2
date: 2024-02-26
collection: leetcodesolutions
permalink: /leetcodesolutions/2/
excerpt: Solution to [Leetcode 2](https://leetcode.com/problems/add-two-numbers/description/)
---
# [Problem](https://leetcode.com/problems/add-two-numbers/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a linked list after adding two linked lists together. The linked lists are presented as reversed non-negative integers with one digit in each node. Adding these numbers together in the presented manner is therefore easier than if the numbers were presented in non-reversed order as keeping track of the remainder when performing the integer addition is much simpler. Addition typically involves adding numbers from right to left and we are presented with the two numbers in right to left fashion.

We will create a new linked list and continue populating it with the addition of the current position of both linked lists. If either of the linked lists is shorter, we simply treat its non-existent values as 0 similar to regular addition. We traverse the linked lists by moving the list pointers to their next values if we aren't already at the end of the respective lists. For our last check, if we are left with a remainder with no more nodes, we finish off with a new node with value 1. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the head of list to be an empty node. We will utilize this `head` pointer for returning the start of our new list.
2. Initialize our current pointer `cur` to start at head
3. Initialize our remainder tracker `rem` to be 0.
4. While either list exists, find the value of each list's current node by using either its value if the node exists or 0 if that list has terminated.
5. Calculate our current sum utilize our remainder, calculate our new remainder if the current value is over 10. Make sure we trim the leading 1 if our current value is over 10.
6. Create a new node with the current value and have our current node point to it. Move our current node pointer `cur` to the newly created node.
7. If the lists have not terminated, move to the next node in the respective lists.
8. Once we finish with both lists, if a remainder exists, create a new node with value of 1 and make our current node point to it.
9. Return the beginning of our new list. Because we started with a dummy value, return `head.next`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through both lists and perform constant time operations for each node.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We create a new linked list that is at least as large as our largest list.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        cur = head
        
        rem = 0

        while l1 or l2:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0
            val = v1 + v2 + rem
            rem = val // 10
            val %= 10

            cur.next = ListNode(val=val)

            cur = cur.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if rem:
            cur.next = ListNode(val=1)
        return head.next

```