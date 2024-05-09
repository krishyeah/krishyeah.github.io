---
title: "108 Convert Sorted Array to Binary Search Tree"
number: 108
date: 2024-03-12
collection: leetcodesolutions
permalink: /leetcodesolutions/108/
excerpt: Solution to [Leetcode 108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)
---
# [Problem](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to return height balanced binary tree for a given sorted array input. A height balanced tree is a binary tree for which each leaf node differs by a maximum of 1 in height from each other leaf node.

To create this, we can use recursion in order to traverse through the tree and populate each node and its children. We know that we must start at the center in order to create a balanced binary tree for the sorted array and then its children will be in the middle of the arrays to the left and the right of the selected root node. For each array, the root of that array will be the center value and its children will be at the center of the left and right subarrays not including the root value respectively.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Account for our base case in recursion. If an empty array is sent, return None. This would indicate that either this function is being called from a leaf node or that an empty input array was given.
2. Find the middle value which is at the center of the current array.
3. The current root node is create from the center of the current array. It's left and right children are chosen by dividing the current array into two and recursively using our function to find the center and create new nodes.
4. Return the root node to the calling function. This will either return the children nodes to their ancestors or return the root of our tree to the driver function.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each number in the array once while recursively building our solution.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize stack spcae in our recursive calls linearly proportional to the input size.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None

        mid = len(nums) // 2

        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[:mid])
        root.right = self.sortedArrayToBST(nums[mid+1:])

        return root
```