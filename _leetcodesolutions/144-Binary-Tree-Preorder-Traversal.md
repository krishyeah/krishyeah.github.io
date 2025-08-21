---
title: "144 Binary Tree Preorder Traversal"
number: 144
date: 2025-08-18
collection: leetcodesolutions
permalink: /leetcodesolutions/144/
excerpt: Solution to [Leetcode 144](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)
---
# [Problem](https://leetcode.com/problems/binary-tree-preorder-traversal/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to complete a pre-order traversal of a tree. Pre-order traversal follows a DFS approach in which the left sub-trees are recursively traveled first and then the right sub-trees. Because it is given as the problem statement, we know that we must use DFS; otherwise, the intuition would be to read the problem statement to understand what kind of traversal is being sought out and determining we would need to use pre-order traversal which would lead us to DFS.

## Approach
<!-- Describe your approach to solving the problem. -->
Implementing a DFS pre-order traversal is fairly simple. We utilize a standard DFS approach of recursively following root nodes and as we are performing a pre-order traversal, we record the root node before going into the left subtree and then the right subtree.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We visit every node in the tree once achieving linear time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. The stack space utilized for a DFS is linear with the number of nodes in the tree.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(root):
            if not root:
                return
            res.append(root.val)
            dfs(root.left)
            dfs(root.right)
        
        dfs(root)
        return res
```