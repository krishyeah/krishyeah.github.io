---
title: "1026 Maximum Difference Between Node and Ancestor"
number: 1026
date: 2024-01-10
collection: leetcodesolutions
permalink: /leetcodesolutions/1026/
excerpt: Solution to [Leetcode 1026](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/)
---
# [Problem](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us find the maximum difference between a node and any of its ancestors in a binary tree. An acestor is defined as "A node `a` is an ancestor of `b` if either: any child of `a` is equal to `b` or any child of `a` is an ancestor of `b`." Essentially as long as the relation between two nodes can be traced in a single direction (up or down) the tree, we can compare their values for the maximum difference.

There is a very clean solution to this problem using a DFS approach as DFS is guaranteed to pass through ancestral relations only. If we were using BFS, the solution could get slightly complicated as we may need to keep track of ancestral relationships; however, with DFS, this becomes trivialized. We just need to keep a way to track the maximum difference and the possible maximum difference that can be made in an ancestral line. We do this by passing the previously seen maximum and minimum values seen in the ancestral chain and then returning the maximum difference that can be made throughout the chain. By passing the maximum and minimum values down the ancestral chain and returning the maximum possible difference up the chain, we ensure that we do not mix the values across difference paths when a node has two children. We want to avoid calculating the maximum difference using the maximum value from the left child's subtree and the minimum value from the right child's subtree for example. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our maximum difference variable, `max_diff`, as 0.
2. Call our `dfs(root, anc_min, anc_max)` function which takes as inputs a root node, and the minimum and maximum values in the node's ancestral chain, `anc_min` and `anc_max` repsectively, and returns the maximum difference in an ancestral chain. `dfs(root, anc_min, anc_max)` calculates the maximum possible difference from the current node's ancestral chain and updates the minimum and maximum values if necessary to pass to the children of the current node.
3. Return the maximum difference found after traversing all ancestral chains.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We traverse the entire tree performing constant time operations per node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack space equal to the maximum depth of the tree which in the case of a linked list would be equal to `n`.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        max_diff = 0

        def dfs(root, anc_min, anc_max):
            if not root:
                return
            

            if root.val > anc_max:
                anc_max = root.val
            if root.val < anc_min:
                anc_min = root.val

            max_diff = anc_max - anc_min

            if root.left:
                max_diff = max(max_diff, dfs(root.left, anc_min, anc_max))
            if root.right:
                max_diff = max(max_diff, dfs(root.right, anc_min, anc_max))
            
            return max_diff

        return dfs(root, 10 ** 5 + 1, -1)

```