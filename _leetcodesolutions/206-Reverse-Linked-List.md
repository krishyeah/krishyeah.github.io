---
title: "206 Reverse Linked List"
number: 206
date: 2024-01-02
collection: leetcodesolutions
permalink: /leetcodesolutions/206/
excerpt: Solution to [Leetcode 206](https://leetcode.com/problems/reverse-linked-list/description/)
---
# [Problem](https://leetcode.com/problems/reverse-linked-list/description/)

# Solution 1 - Iterative 
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To flip a singly linked list in an iterative approach, we simply traverse down the linked list and flip the pointers to the next node in the list as we approach them. For each node, we keep track of the previous node, the current node, and the next node. The previous node will become the new `node.next`. The current node is the node we are currently processing. And the next node is kept so we do not lose track of the original linked list.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initilize `prev` to `None` as we are starting on the first node and there is no previous node.
2. Initialize the current node to the given `head` for our starting point.
3. While the current node, `curr`, is not `None`, continue processing nodes. The process includes, tracking `next_node`, updating the current node's next pointer, `curr.next` to point to the previous node, `prev`. Then updating `prev` to track the current node and updating `curr` to track the next node we will visit, effectively sliding our process along by one node.
4. The `while` loop terminates when we reach the end and there are no more nodes left to process, we then return `prev` which holds the last node of the original list, or the first node of our reversed list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each node performing constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any other data structures and only use constant space for our variables.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head

        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node

        return prev
```

# Solution 2 - Recursive
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The recursive solution is slightly harder to conceptualize even though the process is mostly the same. We traverse all nodes recursively instead of iteratively, but the process is mostly the same.

We start with our base case which is returning `head` if either, 1. `head` is `None` or `head.next` is `None`. We then use `result` which is how we use the recursive process to send up the last node back up the recursive chain so that after the list is reversed, it is the starting node of the reversed list to be returned.

The recursive calls continue until we reach our base case. This occurs when we reach the last node. We then return this value and it remains untouched to pass up the recursive chain. The rest of the process works in a similar fashion to the previous approach, but in a typical recursive fashion from the "bottom-up". The first pointers which get flipped will be the second to last node's and last node's pointers, and then we work our way up the chain as `result` continues to get passed and pointers continue to get flipped. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check our base cases. If `head` or `head.next` are `None`, return `head` as we have either or 1 nodes and do not need to continue our recursive pattern. This also handles the edge case of when there are either 0 or 1 nodes.
2. Call the function recursively to return the last node, `result`.
3. Once recursive calls are finished, the processing will begin with the second to last node. `head.next.next` refers to the next value's next pointer, so this is flipped to be the current node, and the current node's next pointer, `head.next` is removed.
4. We continue returning `result` which continues to point to the original list's last node, and the reversed list's first node. Once all recursive returns are called, this gets returned to the driver function as our final answer.  

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each node and perform constant time operations per iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. Recursive calls take stack space, and our recursive calls will use space linearly proportional to the length of the linked list.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Recursive
        if head is None or head.next is None:
            return head
        
        result = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return result
```