---
title: "1700 Number of Students Unable to Eat Lunch"
number: 1700
date: 2024-03-06
collection: leetcodesolutions
permalink: /leetcodesolutions/1700/
excerpt: Solution to [Leetcode 1700](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/)
---
# [Problem](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the number of students who are unable to eat because they did not see their favorite sandwich on top of the stack of sandwiches. We are given as input two lists: one is a list of students and their preferred type of sandwich, and the other is a list of sandwiches. The sandwiches are to be treated like a stack and the students may only take the sandwich that is on the top. If the current student in the front of the line does not prefer the sandwich on the top, they will go to the back of the line. This process continues until all no student is willing to take the top sandwich or all students have recieved a sandwich. We need to return the number of students who were unable to take a sandwich.

To solve this problem we first convert the lists into deques. This will allow us to perform the cycling operation on the students which requires us to move the students from the front of the line to the back if they do not want the current top sandwich. We also make the sandwiches a deque as we need to pop from the list in order to remove the top sandwich and `queue.popleft()` is more effcient that `list.pop(0)`.

While there are students that have not eaten and while there are students who prefer the type of sandwich that is currently at the top of the stack, we can cycle through the students until we find a student that will take the sandiwch and remove the student and the sandwich from their respective stacks. After we can no longer remove students/sandwiches, we return the number of students left in the deque who did not get to eat a sandwich.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Convert the input lists into deques, which allows us to efficiently cycle the student in the front of the line and pop from the left side of the sandwiches list.
2. While there are students that have not eaten and while there are students who prefer the type of sandwich that is currently at the top of the stack, we can cycle through the students until we find a student that will take the sandiwch and remove the student and the sandwich from their respective stacks.
3. After we can no longer remove students/sandwiches, we return the number of students left in the deque who did not get to eat a sandwich.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n^2)$. We count how many students prefer the top sandwich ($O(n)$) when each student comes up ($O(n)$). This leads to $O(n*n) \rightarrow O(n^2)$ time complexity. This dominates the other $O(n)$ operations such as converting the lists into deques.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We convert the lists into deques utilizing a constant space complexity.

## Code
```python
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        students = deque(students)
        sandwiches = deque(sandwiches)

        while students and students.count(sandwiches[0]):
            if students[0] == sandwiches[0]:
                students.popleft()
                sandwiches.popleft()
            else:
                students.append(students.popleft())

        return len(students)
```