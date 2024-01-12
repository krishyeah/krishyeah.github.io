---
title: "872 Leaf-Similar Trees"
number: 872
date: 2024-01-09
collection: leetcodesolutions
permalink: /leetcodesolutions/872/
excerpt: Solution to [Leetcode 872](https://leetcode.com/problems/leaf-similar-trees/description/)
---
# [Problem](https://leetcode.com/problems/leaf-similar-trees/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem asks us to find whether a left-to-right in-order sequence of leaf node values are equivalent between two trees. This problem is quite simple using a depth first search traversal.

Depth first search will find all of the leaf nodes in order and thus, we can populate a list to contain all of these leaf node values in an ordered fashion and then simply compare the lists of leaf nodes values between the two trees. There are a few different methods for accomplishing this, but the simplest one is to create two different dfs methods to handle each tree.

We do DFS traversal and append the node value to our list if it is a leaf node. We do the same for the second tree and then compare the lists to check whether the trees have the same leaf node sequence.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our lists, `leaf_sequence_1` and `leaf_sequence_2`, for collecting each leaf node value of each tree in order.
2. Perform `dfs1()` and `dfs2()` which perform a depth first search traversal of each tree and append leaf node values in order.
3. Return whether `leaf_sequence_1` and `leaf_sequence_2` are equal indicating the trees have the same leaf node in order sequence.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(N_1+N_2)$. We traverse both trees and perform constant time operations on each node of each tree.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(N_1+N_2)$. We store the leaf node value and also utilize stack space in our DFS traversal.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        leaf_sequence_1 = []
        leaf_sequence_2 = []

        def dfs1(root):
            nonlocal leaf_sequence_1
            if root.left:
                dfs1(root.left)
            if root.right:
                dfs1(root.right)
            if not root.left and not root.right:
                leaf_sequence_1.append(root.val)
        
        def dfs2(root):
            nonlocal leaf_sequence_2
            if root.left:
                dfs2(root.left)
            if root.right:
                dfs2(root.right)
            if not root.right and not root.left:
                leaf_sequence_2.append(root.val)
        
        dfs1(root1)
        dfs2(root2)
        
        return leaf_sequence_1 == leaf_sequence_2
```