---
title: "141 Linked List Cycle"
number: 141
date: 2024-03-04
collection: leetcodesolutions
permalink: /leetcodesolutions/141/
excerpt: Solution to [Leetcode 141](https://leetcode.com/problems/linked-list-cycle/description/)
---
# [Problem](https://leetcode.com/problems/linked-list-cycle/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether a given linked list has a cycle. We can accomplish this without the use of extra space to keep track of the nodes in order to see whether we have a cycle.

We utilize a two pointer approach in which the fast and slow pointers move at different speeds with the fast pointer moving two nodes at a time while the slow pointer moves one node at a time down the linked list. This will eventually find the cycle as if the fast pointer is directly behind the slow pointer, they will move to the same node in the next iteration if there is a cycle. If the fast pointer is two nodes behind the slow pointer, it will be one node behind the pointer in the next iteration and then the previous case will hold. The fast pointer will not hop over the slow pointer and they are guaranteed to meet if there is a cycle.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check the base case of having an empty list and return `False` as the empty list does not have a cycle.
2. Initialize `slow` and `fast` our slow and fast pointers as `head` and `head.next` respectively. 
3. While `fast` and `fast.next` are not `None` indicating the list has terminated, check if `fast == slow` indicating we have a list and return `True`. Else, iterate the fast pointer two nodes ahead and iterate the slow pointer one node ahead. If the `while` loop breaks indicating the list has terminated, return `False` as there was no cycle.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the list once and terminate on a cycle.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for this solution.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        slow = head
        fast = head.next

        while fast and fast.next:
            if fast == slow:
                return True
            fast = fast.next.next
            slow = slow.next
        return False
```