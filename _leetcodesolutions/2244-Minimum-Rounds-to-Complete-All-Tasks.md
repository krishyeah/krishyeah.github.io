---
title: "2244 Minimum Rounds to Complete All Tasks"
number: 2244
date: 2025-12-14
collection: leetcodesolutions
permalink: /leetcodesolutions/2244/
excerpt: Solution to [Leetcode 2244](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/)
---
# [Problem](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/)

# Solution

### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the minimum number of rounts to solve tasks given a complexity level. Tasks must be solved either 2 or 3 at a time for a given complexity level.

Because we want to find the minimum number of tasks to solve, it is clear that if we can, we should solve 3 at a time. If we have 6 total tasks of a given complexity level, it would take either 3 rounds of solving in pairs, or 2 rounds of solving in groups of 3. This makes the ideal strategy solving in 3's whenever possible. We now only need to consider cases in which we cannot solve in 3's. If we have 2 tasks remaining or 4 tasks remaining, we must solve in 2's either for 1 round, or for 2 rounds. 

The math is fairly simple from here. There are only 3 cases which we must consider:
1. There are a multiple of 3 (`n % 3 == 0`) tasks for a given complexity level. Here we simply complete `n // 3` rounds of tasks.
2. There is 1 more than a multiple of 3 (e.g.: 4, 7, 10). In this case, we complete `n // 3 - 1` rounds leaving 4 tasks. In the previous example we would solve 0 tasks in 0 rounds, 3 tasks in 1 round, or 6 tasks in 2 rounds. We use 2 more rounds to solve the remainder 4 tasks for a total of `n // 3 - 1 + 2 == n // 3 + 1` rounds.
3. There is 1 less than a multiple of 3 (e.g.: 2, 5, 8). In this case, we complete `n // 3` rounds leaving 2 tasks left. For the previous examples would have completed 0 tasks in 0 rounds, 3 tasks in 1 round, or 6 tasks in 2 rounds. We can solve the remainder 2 tasks with 1 round of 2 for a total of `n // 3 + 1` rounds.

Notice that the math gives only two outcomes. If there is a multiple of three tasks, we can add to our result `n // 3` rounds. If there is not a multiple of 3, we can add to our result `n // 3 + 1` rounds.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Intialize a hashmap to store the counts of each level of complexity.
2. For each level of complexity, we add either `n // 3` rounds or `n // 3 + 1` rounds for completing all tasks based on the MOD 3 of the number of tasks.
3. Return our result variable.
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize linear for counting the frequency and then iterating through each level of complexity for calculating the number of rounds.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize linear space for storing the counts of each level of complexity.

## Code
```python3 []
class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        num_tasks = {}

        for task in tasks:
            num_tasks[task] = num_tasks.get(task, 0) + 1

        res = 0

        for task in num_tasks:
            if num_tasks[task] < 2:
                return -1
            elif num_tasks[task] % 3 == 0:
                res += num_tasks[task] // 3
            else:
                res += num_tasks[task] // 3 + 1

        return res
```