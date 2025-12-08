---
title: "207 Course Schedule"
number: 207
date: 2024-01-02
collection: leetcodesolutions
permalink: /leetcodesolutions/207/
excerpt: Solution to [Leetcode 207](https://leetcode.com/problems/course-schedule/description/)
---
# [Problem](https://leetcode.com/problems/course-schedule/description/)

# Solution 

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find whether it is possible to take every course offering given a set of prerequisites that must be taken for each course. For example, if we wanted to take course 1, but it required course 0 as a prerequisite, but course 0 also required course 1 as a prerequisite, we can never take either course.

This small example leads us to our intuition for how to solve this problem. We realize that each course offering and its prerequisites forms a graph. Each course is a node, and its prerequisites are ordered edges pointing from the prerequisites to the course. If there is a cycle of nodes, we will never be able to complete the courses as we will never be able to begin the courses in the cycle which are all cyclically dependent on each other.

We thus want to create a graph representation from the given edges, and then look for cycles in the graph. If we see a cycle in the graph, then we return `False` as the courses cannot all be completed. If we do not find a cycle, we return `True` as we can complete every course.

There are many methods to finding cycles including a topological sort using Kahn's algorithm. Kahn's algorithm in practice may be faster, but requires some knowledge of graph algorithms. A DFS approach may be more suited for beginners and thus it is listed here.

For finding a cycle using DFS, we scan through each node and keep a set to keep track of nodes in the current scan as well as a set to keep track of all visited nodes. We recursively find neighbors of neighbors and traverse until we hit a dead end and return `False` indicating that we have not found a cycle. While processing the current node, if it was previously seen in set that tracks the current set of nodes, we have found a cycle and return `True`. If the node is in the previously visited set, we return `False` as nodes only get added to the visited set when they are confirmed not to be in a cycle. When the current node is done being processed, we remove it from the set tracking nodes in the current path.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create an adjacency representation of the graph. I use a dictionary with node names as keys with the values being sets holding all neighbors. A list of lists can also be used.
2. Check for a cycle in the graph. In DFS, to find a cycle, we use two sets, one to track previously visited nodes, and one to track nodes that are part of the current path. If a node shows up twice in the current path, we have found a cycle. We iterate through all nodes that have not previously been visited and recursively traverse through their neighbors. If we find a note that is part of our current path, we return `True` as we have found a cycle. If we scan through each node and its neighbors without finding a cycle, we return `False`.
3. We return in our main function the opposite of our cycle finding algorithm as we want to return whether there are NO cycles in our graph.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(N+M)$. We traverse through each node and each edge in our graph while building the graph and also while traversing the graph to find cycles. We perform constant time operations during our cycle finding algorithm.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(N+M)$. We utilize space to hold our adjacency representation of our graph.

## Code
```python3 []
from typing import List, Dict, Set

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Build adjacency list: edge prereq -> course
        graph = {i: set() for i in range(numCourses)}
        for course, prereq in prerequisites:
            graph[prereq].add(course)

        return not self.has_cycle_dfs(graph)

    def has_cycle_dfs(self, graph: Dict[int, Set[int]]) -> bool:
        visited = set()
        on_stack = set()

        def dfs(u: int) -> bool:
            if u in on_stack:
                return True
            if u in visited:
                return False
            visited.add(u)
            on_stack.add(u)
            for v in graph.get(u, ()):
                if dfs(v):
                    return True
            on_stack.remove(u)
            return False

        for node in graph:
            if node not in visited:
                if dfs(node):
                    return True
        return False
```
