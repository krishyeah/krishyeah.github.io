---
title: "513 Find Bottom Left Tree Value"
number: 513
date: 2024-02-27
collection: leetcodesolutions
permalink: /leetcodesolutions/513/
excerpt: Solution to [Leetcode 513](https://leetcode.com/problems/find-bottom-left-tree-value/description/)
---
# [Problem](https://leetcode.com/problems/find-bottom-left-tree-value/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return the leftmost value of the last row in a given tree. This problem can be solved using both DFS and BFS; however, the problem statement lends itself to a really simple BFS solution.

Breadth First Search or BFS traversal visits nodes in an order similar to a balloon expanding. In the case of a graph, we would start at a node and visit nodes based on their distance from the starting node. We expand the radius of traversal at each step and visit nodes within the radius before increasing the radius for the next set of nodes. In the case of a binary tree such as this problem, we simply travel down the tree row by row. The first traversal will include the root, then the next set will include the first row, and so on.

BFS utilizes a queue for this traversal as we explore/process nodes in the order that we have seen them in order to maintain this wave-like pattern of moving down the tree. We can check what level we are currently on by measuring the size of the queue before the current level is traversed and then measuring again once we have traversed all nodes in the current level. 

Using BFS will allow us to get the nodes in each row listed in left-to-right order (right-to-left can also be achieved; however, for simplicity we will go through the standard BFS algorithm which traverses left to right). We can therefore quite simply pick the left-most value of the row and by continuously overwriting this left-most value when we discover a new row, we will ensure we have the left-most value of the bottom-most row which solves our problem of finding the left-most value of the last row in the given tree.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a deque for our traversal, `queue`
2. Append our root to `queue` so we can begin our traversal. We are guaranteed to have at least one node so we can simply start with the root, otherwise, we would check to see if root exists and could return if an empty node was given.
3. While there are nodes in our queue indicating that there is another level to traverse, we find the size of our level, and set our result to be the left-most node of the current level. This value continues to get overwritten so we are guaranteed to have the left-most node of the lowest level in the tree in this variable.
4. For each level, pop a node, and start by traversing the left children of each node guaranteeing that the nodes in each level are sorted from left to right.
5. Return `res` once we have iterate through each level of the tree.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse each node in the tree and perform constant time opereations on each node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. The queue utilized stores an entire level of nodes which in the worst case of a perfect binary tree will be $n/2$. $O(n/2) \rightarrow O(n)$

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = deque()
        queue.append(root)
        while queue:
            lvl_size = len(queue)
            res = queue[0].val
            while lvl_size > 0:
                cur = queue.popleft()
                lvl_size -= 1
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
        return res
```