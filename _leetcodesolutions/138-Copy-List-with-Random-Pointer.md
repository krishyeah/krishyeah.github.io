---
title: "138 Copy List with Random Pointer"
number: 138
date: 2024-03-08
collection: leetcodesolutions
permalink: /leetcodesolutions/138/
excerpt: Solution to [Leetcode 138](https://leetcode.com/problems/linked-list-cycle/description/)
---
# [Problem](https://leetcode.com/problems/linked-list-cycle/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return a deep copy of a given linked list. The linked list contains the standard `Node.next` for the links; however, there is also a `Node.random` property which points to a random node in the list or to `None`. We must recreate this list as a deep copy which means a new copy of the same list in memory, while maintaining the previous list.

We can accomplish this either through the use of a hashmap which will have as keys the current node and as its value it's deep copy. We can then iterate through the list and set up our links by grabbing our copied nodes from memory through the use of our hashmap. This solution has an $O(n)$ time complexity with an $O(n)$ space complexity.

We can do better through interleaving the copied nodes into the old list, and then resetting the links in order to ensure the old list is not affected, while also pulling our created list out of the chain. We can first create the new nodes and set them to be after their counterparts in the linked list. In essence, `new_node.next = node.next.next` and `node.next = new_node`. This places `new_node` between `node` and its formerly next node. We can continue this process until we traverse through the whole linked list. Our linked list now contains node1 -> node1_copy -> node2 -> node2_copy ... etc.

The next step is to recreate the `node.random` property for each node. Because each node's copy is directly after it, we can simply traverse through the list and for nodes which have the random property (currently only the original nodes), we can set their copy's random property to be the original node's random node's next node. Quite the mouthful, however, in code this is neatly written as:
```python
if curr.random:
    curr.next.random = curr.random.next
```

Our last step is to extract the copy list out of the original list and preserve the original list's links. We simply need to for each node, set it's next property to jump over a node since as previously mentioned, our list currently looks like node1 -> node1_copy -> node2 -> node2_copy ... etc.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check our base case for if no list exists and return `None`.
2. Iterate through the list and for each node, create a copy of the node, `new_node`. Set `new_node.next = curr.next` and `curr.next = new_node` to ensure the copied node is inbetween its original counterpart and the original counterpart's next node.
3. Iterate through the list and for each node with a random property, set it's copy's random node to be the copy of the original node's random node. Because the copies are always directly after their original counterparts, this is neatly done.
4. Separate the copied list out of the original list and reset the links of the original list by making the next property skip over a node to ensure original nodes point to original nodes, and copy nodes point to copy nodes.
5. Return the head of the copied list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the entire list 3 times and perform constant time operations on each iteration.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We do not utilize any additional space than the space required for the copy which is part of expected return value.

## Code
```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        curr = head

        while curr:
            new_node = Node(x=curr.val)
            new_node.next = curr.next
            curr.next = new_node
            curr = curr.next.next
        
        curr = head
        while curr:
            if curr.random:
                curr.next.random = curr.random.next
            curr = curr.next.next
        
        curr = head
        new_head = head.next

        while curr.next:
            temp = curr.next
            if curr.next:
                curr.next = curr.next.next
            curr = temp
        
        return new_head
```