---
title: "876 Middle of the Linked List"
number: 876
date: 2024-03-07
collection: leetcodesolutions
permalink: /leetcodesolutions/876/
excerpt: Solution to [Leetcode 876](https://leetcode.com/problems/middle-of-the-linked-list/description/)
---
# [Problem](https://leetcode.com/problems/middle-of-the-linked-list/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the middle of a linked list. If the linked list has an odd number of nodes, we return the exact center. If the linked list has an even number of nodes, as there will be two middle nodes, we return second middle node.

This problem is fairly straightforward using a two pointer approach. We start a slow pointer, `slow`, at the first node and a fast pointer, `fast`, at the second node. This will allow us to solve the problem in one pass as if we move the `fast` pointer twice as fast as the `slow` pointer, when our `fast` pointer reaches the end, our `slow` pointer will be halfway through the list. We need to then only consider the edge cases of the even and odd cases.

We can use a while loop to continue moving through nodes while the `fast` pointer exists and has another node to go to.

For the odd case, let's say there are 5 nodes. When the loop breaks, the middle node will be 3 so the `slow` pointer will be at 3 and the `fast` pointer will be at 6. This is easy enough to track as we can simply break our loop when the `fast` pointer no longer points to a node. For the even case, let's say there are 6 nodes. When the loop breaks, the `slow` pointer will be 3 and the `fast` pointer will be 6. The loop breaks because otherwise it will throw an error when we try to access `None.next`. If the `fast` pointer points to a node; however, we want to iterate the slow pointer one more time and return that node. 
  
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a slow pointer, `slow`, to start at head
2. Initialize a fast pointer, `fast`, to start at head.next.
3. While `fast` and `fast.next` point to valid nodes, iterate `slow` pointer by one node and `fast` pointer by two nodes.
4. After the last iteration, if `fast` still points to a node there are an even number of nodes and we iterate `slow` one more time to return the second middle node as requested.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We perform a single pass with two pointers which utilizes constant time.

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
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head.next

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        return slow.next if fast else slow
```