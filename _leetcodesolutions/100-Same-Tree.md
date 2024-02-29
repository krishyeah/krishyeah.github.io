---
title: "100 Same Tree"
number: 100
date: 2024-02-18
collection: leetcodesolutions
permalink: /leetcodesolutions/100/
excerpt: Solution to [Leetcode 100](https://leetcode.com/problems/same-tree/description/)
---
# [Problem](https://leetcode.com/problems/same-tree/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether two binary trees are the same. We can use a DFS approach to traverse each tree together and compare the two trees.

For a recursive DFS solution, we want to keep track of what information each node must pass on to its parent. In this problem, we want to find whether the value of nodes in each tree are the same in each position. We can utilize a boolean flag to keep track of this information as if we ever reach a `False` condition, we can continue propogating the `False` throughout the recursive stack. The base will be when we reach a position in which possible one or two nodes are null nodes. We can handle this by returning `True` when both nodes are null and `False` when only one is.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Handle our base when either node is null. This is our base case as calling for a null node's child will cause an error so we must handle this situation. Return `True` when both nodes are null and `False` when only one is.
2. Check if the current nodes are different and make our boolean flag `False` if so.
3. Continue our recursion and check if the right child and left child of each node are the same.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse each node once, and perform constant time operations for each node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack space for our recursive calls which in the worst case of a linked list uses O(n) space.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p == None or q == None:
            return p == None and q == None
            
        if p.val != q.val:
            return False
        else:
            return self.isSameTree(p.right, q.right) and self.isSameTree(p.left, q.left)
```