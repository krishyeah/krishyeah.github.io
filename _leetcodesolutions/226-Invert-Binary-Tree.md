---
title: "226 Invert Binary Tree"
number: 226
date: 2024-02-18
collection: leetcodesolutions
permalink: /leetcodesolutions/226/
excerpt: Solution to [Leetcode 226](https://leetcode.com/problems/invert-binary-tree/description/)
---
# [Problem](https://leetcode.com/problems/invert-binary-tree/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to invert a binary tree which basically means to flip the tree across its vertical axis. This is another problem which DFS will come handy for. We can traverse each node, flip its children, and continue the process down the tree.

This problem is very straightfoward and we only need to keep two things in mind. Firstly, what information do we want to pass through our recursive chain, and what is our base case. There is no information we really need to pass for this recursion to work; however, because we want to return the head of the flipped tree for our solution, we will return each node after its children have been recursively flipped. For the base case, if the node is a null node, we simply return None as it is a null node.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Consider our base case for recursion. If a node is null, we reutrn None.
2. For each node, flip its children.
3. Then recurisvely call on the left and right children to have them flipped as well.
4. Return the flipped node.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse each node once and perform constant time operations per node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack space for our recursion. In the worst case of a linked list, this would be O(n).

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def flipTree(root):
            if not root:
                return None
        
            root.left, root.right = root.right, root.left

            self.invertTree(root.left)
            self.invertTree(root.right)
            
            return root

        return flipTree(root)
```