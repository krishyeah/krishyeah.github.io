---
title: "104 Maximum Depth of Binary Tree"
number: 104
date: 2024-02-18
collection: leetcodesolutions
permalink: /leetcodesolutions/104/
excerpt: Solution to [Leetcode 104](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)
---
# [Problem](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the maximum depth or height of a binary tree. This problem lends itself towards using DFS as we want to follow the depth lines of a binary tree. We can simply travel down a path and for each level in the binary tree we add one.

When using DFS or BFS, we want to keep track of what information each node should be passing upwards as the recursive calls start to return. In this case we want to pass upwards the current maximum height that each node is aware of. When we reach a leaf node, its null children will return 0 causing the leaf node to return the maximum of its children plus 1 which is 0 + 1 = 1. Each node will add 1 to the maximum of its children's height in order to include its own height and the final return call will return the maximum height of the binary tree.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Consider our base case for recursive return which is when a null node is reached. We return 0 as this null node does not contribute towards the height.
2. Recursively call the children and return 1 + the maximum height of a node's children.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse each node and perform constant time operation per node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack space equal to the maximum height of the tree which in the worst case of a linked list would be O(n).

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```