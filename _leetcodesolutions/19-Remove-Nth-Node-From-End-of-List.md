---
title: "19 Remove Nth Node From End of List"
number: 19
date: 2024-03-04
collection: leetcodesolutions
permalink: /leetcodesolutions/19/
excerpt: Solution to [Leetcode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)
---
# [Problem](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a list with the n-th node from the end removed. We are not given the size of the list so we do not know which node we are to remove on the first pass. We are given the added challenge of solving this problem in one pass which is what we will do.

The intuition behind what we are trying to accomplish is that if three nodes, `prev_node`, `cur_node`, and `next_node`, and we want to remove node `cur_node`, we are simply making `prev_node.next = next_node`. We only need to therefore keep track of a three node window while stepping through our list. We just need to slide this window over to the correct node and then perform our operation to remove our `cur_node` node. Our next problem to sovle is we need to make sure that `cur_node` is chosen as the n-th node from the end of the list. This is done by taking a pointer which will be `n` nodes ahead of our `cur_node`. When our pointer reaches the end of the list, we know that we our `cur_node` is the n-th node from the end of the list and we must remove it. We will first move our pointer `n` nodes ahead of our window, and then step the pointer and the window ahead by a node until we reach the end of our list. Then we remove `cur_node` and return the head of our list.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a `dummy` node which will keep track of the head of our list and also gives us an empty node to start our `prev_node` at.
2. Initialize `prev_node`, `cur_node`, and `next_node` to be centered at our `head`. These nodes will form our window.
3. Initialize `pointer` to start at `head`. Pointer will be moved to be `n` nodes ahead of the center of our window to help us find the end of the list.
4. Move `pointer` `n - 1` nodes ahead. We move `n - 1` as the 1st node from the end (`n = 1`) is actually the last node.
5. While we have not reached the end of the list, move our pointer and window ahead by a node.
6. After we have placed our window in the correct position, drop `cur_node`, by making `prev_node.next = next_node`.
7. Return the head of the list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each node once and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space for our pointer and window.

## Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        prev_node = dummy
        cur_node = head
        next_node = head.next
        
        pointer = head
        for _ in range(n - 1):
            pointer = pointer.next
        
        while pointer.next:
            pointer = pointer.next
            prev_node, cur_node, next_node = cur_node, next_node, next_node.next
        
        prev_node.next = next_node
        return dummy.next
```