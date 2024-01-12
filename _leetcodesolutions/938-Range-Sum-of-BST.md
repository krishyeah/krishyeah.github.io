---
title: "938 Range Sum of BST"
number: 938
date: 2024-01-07
collection: leetcodesolutions
permalink: /leetcodesolutions/938/
excerpt: Solution to [Leetcode 938](https://leetcode.com/problems/range-sum-of-bst/description/)
---
# [Problem](https://leetcode.com/problems/range-sum-of-bst/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the sum of all nodes in a binary tree subject to the criteria that the node value is in the inclusive range `[low, high]`. This is a fairly straightforward problem as we can utilize a basic depth first search and implement the search criteria and summation to our processing of nodes.

We perform a depth first search, and when we start processing nodes, we add the value to our global `range_sum` value if it is between the range specified.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our global result variable, `range_sum`.
2. Run our DFS algorithm which traverses our tree while looking at whether node values meet the criteria and adds them to `range_sum` which globally keeps track of the sum and therefore does not need to be passed around by the `dfs` function.
3. Return `range_sum`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. Our function traverses each node once and performs a constant time operation per node so our time complexity is $O(n)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack space during the traversal which results in an $O(n)$ space complexity.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        range_sum = 0

        def dfs(root, low, high):
            nonlocal range_sum
            if not root:
                return
            if root.left:
                bst(root.left, low, high)
            if root.right:
                bst(root.right, low, high)
            if low <= root.val and root.val <= high:
                range_sum += root.val

        dfs(root, low, high)

        return range_sum
```