---
title: "1609 Even Odd Tree"
number: 1609
date: 2024-02-28
collection: leetcodesolutions
permalink: /leetcodesolutions/1609/
excerpt: Solution to [Leetcode 1609](https://leetcode.com/problems/even-odd-tree/description/)
---
# [Problem](https://leetcode.com/problems/even-odd-tree/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to traverse a binary tree and ensure that each level of the binary tree meets certain conditions. The conditions set out are:
- For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
- For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
- The root starts at level 0

This requires us to traverse the tree in a level-by-level approach in order to determine whether each level contains the necessary parity and increasing/decreasing condition needed.

For a level-by-level traversal, the obvious choice is a BFS traversal. BFS traversal will yield the nodes of each tree by level so that we can perform the necessary checks.

For the checks, we make use of a binary toggle and some infinity values in order to check the first value of the row. We perform the parity and strict monotonic checks based on the level for each node in the level which we keep track of in our queue and use a level size value to ensure we change our level when starting the next level of nodes. If all nodes meet the conditions, we return True. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our deque, `queue`, for BFS traversal
2. Append our `root` to `queue`. We are guaranteed to have a root.
3. Create a boolean flag, `flag`.
4. Create a helper array to store values that will perform comparisons against the first values in each row.
5. While the queue is non-empty, there is another level to process. Set the current size of the queue to be the level size, `lvl_size`. Flip our flag before entering a new level. And select our first `last` value based on our helper array.
6. For the nodes in the array, check their parity and their monotony. If they meet the conditions, update the last value to the current value, and then add their children to the queue.
7. Once all nodes have been processed, if we did not trigger a return, we return True.
 
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We perform BFS traversal which traverses each node and performs constant time operations on each node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a queue for our traversal which uses up $O(n)$ space.

## Code
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        queue = deque()
        queue.append(root)

        flag = True
        start = [float('-inf'), float('inf')]

        while queue:
            lvl_size = len(queue)
            flag = not flag
            last = start[flag]
            while lvl_size > 0:
                # even level
                if not flag:
                    cur = queue.popleft()
                    # should be strictly increasing odd numbers
                    if cur.val <= last or cur.val % 2 != 1:
                        return False
                    # set last to be current value
                    last = cur.val
                    # add the children to the queue
                    if cur.left:
                        queue.append(cur.left)
                    if cur.right:
                        queue.append(cur.right)
                # odd numbers
                else:
                    cur = queue.popleft()
                    # should be strictly decreasing even numbers
                    if cur.val >= last or cur.val % 2 != 0:
                        return False
                    # set last to be current value
                    last = cur.val
                    # add the children to the queue
                    if cur.left:
                        queue.append(cur.left)
                    if cur.right:
                        queue.append(cur.right)
                # decrement the level size
                lvl_size -= 1
        # all nodes met conditions
        return True
```