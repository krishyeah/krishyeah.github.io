---
title: "2265 Count Nodes Equal to Average of Subtree"
number: 2265
date: 2023-11-02
collection: leetcodesolutions
permalink: /leetcodesolutions/2265/
excerpt: Solution to [Leetcode 2265](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/)
---
# [Problem](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/)
Given the `root` of a binary tree, return *the number of nodes where the value of the node is equal to the **average** of the values in its **subtree***.

Note:
- The average of `n` elements is the sum of the `n` elements divided by `n` and **rounded down** to the nearest integer.
- A subtree of `root` is a tree consisting of `root` and all of its descendants.
 
Example 1:
Input: `root = [4,8,5,0,1,null,6]`
Output: `5`
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.

# Solution
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks to find whether each node value is equal to the average value of its inclusive substree. I initially thought this was asking for which nodes are equal to the average of the total tree so this seemed like an easy two-run DFS solution; however, it is actually the individual subtrees which adds some complexity. We know that we must retain the information that each node must pass on to its parents and figuring out this detail is the only hard part!

## Approach
<!-- Describe your approach to solving the problem. -->
The approach is actually very basic when you understand what information must be passed up to each parent node. The parent will want to know the sum of all nodes on its left side and right side as well as the total number of nodes in each side in order to calculate the average. In essence we are looking to find the answer to the following conditional equation for each node:

$node.val \stackrel{?}{=} (\sum node.leftSubtree+\sum node.rightSubtree+node.val) // (node.leftNodes+node.rightNodes+1)$

The sum of left and right can easily be passed up to the parent in a tuple and they will continue to accumulate up the tree as the recursive calls finish.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ time complexity as all nodes are visited once and a constant number of operations are done on each node.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$ worst case as each node creates a values to track the sum and total number of nodes. The maximum space that will be used before the values are cleared when the stack starts to clear is $n/2$ as the last row can have $n/2$ nodes and each will need some space for its variables.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        // Total number of nodes which match the criteria of value equalling the average of their inclusive subtree
        count = 0

        def dfs(root):
            // accessing global variable
            nonlocal count
            // each node will track the sum and number of nodes of its children
            leftSum, leftNodes, rightSum, rightNodes = 0, 0, 0, 0

            if root.left:
                leftSum, leftNodes = dfs(root.left)
            
            if root.right:
                rightSum, rightNodes = dfs(root.right)
            
            // check if this node matches the criteria            
            if root.val == (leftSum + rightSum + root.val) // (leftNodes + rightNodes + 1):
                count += 1

            // return the total sum and node that this subtree represents for its parent
            return (leftSum + rightSum + root.val, leftNodes + rightNodes + 1)
        
        dfs(root)

        return count
```