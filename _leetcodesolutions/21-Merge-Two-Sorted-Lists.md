---
title: "21 Merge Two Sorted Lists"
number: 21
date: 2024-02-26
collection: leetcodesolutions
permalink: /leetcodesolutions/21/
excerpt: Solution to [Leetcode 21](https://leetcode.com/problems/merge-two-sorted-lists/description/)
---
# [Problem](https://leetcode.com/problems/merge-two-sorted-lists/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a merged linked list in sorted order given two pre-sorted linked lists.

The brute force approach to this solution would be to store the values of each item in each of the two linked lists in an array and then to sort this array. Then we create new nodes and link them together in their sorted order. This takes $O(n*log(n))$ time and $O(n)$ space as we sort all of the nodes and store each one in memory for sorting. 

We can improve on this by taking into account that each list is already pre-sorted and thus, while walking each of the two linked lists, our merged sorted array only needs to check the current position we currently are at across both linked lists. Because they are sorted each node is guaranteed to be less than or equal to the next node in its current list. Therefore, we only need to check the first node of each list, traverse down the linked list when we consume the smaller of the two nodes, and repeat this until either one or both lists are fully consumed.

We start by creating a dummy node called `head` that will allow us to reference the head of our returned list. We then set our current node, `cur`, to be this head node. We traverse both linked lists by seeing the value of the first node in each list. We make `cur` point towards the lesser of the two nodes. We then traverse down the linked list from which we just consumed a value. We continue until one or both of the lists are fully consumed. If any list still has any values, we attach the remainder of that list to the end of our sorted merged list. We then return the beginning of our merged list. Our dummy node, `head`, points to the start of our list so return the next node of our dummy node. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a dummy node, `head`, to hold the start of our list
2. Initialize the current node pointer, `cur`, to start at `head`
3. While either list has nodes, 'consume' a node by making the lesser of the two nodes between the lists the next node in our merged list and then moving the pointer of `cur` to the newly added node and the consumed list's pointer to the next node in its list.
4. If either list still contains nodes, append the remainder of that list to the end of our merged list.
5. Return the beginning of our merged list which starts with the first node after our dummy node, i.e.: `head.next`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse each node and perform constant time operations for each node.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize only pointers for this solution which uses constant space complexity.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode()
        cur = head
        
        while list1 and list2:
            if list1.val <= list2.val:
                cur.next = list1
                list1 = list1.next
                cur = cur.next
            else:
                cur.next = list2
                list2 = list2.next
                cur = cur.next
        
        if list1:
            cur.next = list1
        elif list2:
            cur.next = list2
        
        return head.next
```