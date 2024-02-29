---
title: "997 Find the Town Judge"
number: 997
date: 2024-02-22
collection: leetcodesolutions
permalink: /leetcodesolutions/997/
excerpt: Solution to [Leetcode 997](https://leetcode.com/problems/find-the-town-judge/description/)
---
# [Problem](https://leetcode.com/problems/find-the-town-judge/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find a person that is trusted by everyone, but trusts no one else. We are given indices by which to identify each person within a town and an array of arrays which contains trust relationships. By thinking about this problem as a directional graph, we can find a property which will help us with this problem. 

Each trust relationship is a directional edge between two people or nodes. By considering the problem in this method, we can see that the town judge who meets the criteria of being trusted by everyone, but trusting no one would have the property of having an in-degree of `n-1` and an out-degree of `0`. We can iterate through all trust relationships and keep track of each person's in-degree and out-degree and by searching for a person who has an in-degree of `n-1` and an out-degree of `0`, we have our solution. If no such person exists, we return `-1`.

We can keep track of the in-degrees and out-degrees by creating two arrays of size n + 1 so that each index of the array corresponds to the index number of each member of the town. This would be an $O(n^2)$ time complexity and $O(n)$ space complexity solution; however, there is a small update we can make for efficiency which although does not impact our Big-O complexities, makes our code slightly neater.

We know the relationship between the out-degree and in-degree is that one is minimized and the other is maximized for a solution. Therefore, we know the expected difference between the in-degree and the out-degree is `n - 1`. We can therefore keep track of the in-degree and out-degree in a single array as there can only be one solution in which the difference between the in-degree and out-degree is `n-1`.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Handle an easy base-case of counting the number of relationships. There must a minimum of `n-1` relationships as the judge is expected to have `n-1` people trusting him. Return `-1` if this condition is not met.
2. Handle the base-case of having an empty trust array. If the array is empty and there is only 1 person in the town, that person is the judge and we return `1` for their index. If there are more people in the town, there is no valid solution so we return `-1`.
3. Create a `trusted` array of size `n + 1` which will track the difference between the in-degree and out-degree for each person 
4. For each relationship in trust, add 1 to the trusted person's trusted number and subtract 1 from the trustee's number.
5. Iterate through the degree differences array, `trusted`. There can be a maximum of 1 person who has a difference of `n - 1`, return their index if they exist. Otherwise return `-1` if no such person exists.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n + m)$ or $O(n^2)$. We iterate through each person or node ($n$) in the graph and iterate through every relationship or edge ($m$) in the graph. This gives us $O(n) + O(m) \rightarrow O(n + m)$; however, $m$ can be $n^2$ in the worst case if everyone has a relationship with every other person. Thus either $O(n + m)$ or $O(n^2)$ are valid.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize an array of size $n$ for keeping track of the relationships.

## Code
```python
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        if len(trust) < n - 1:
            return -1
        
        if trust == []:
            return 1 if n == 1 else -1
        
        trusted = [0 for _ in range(n + 1)]

        for relationship in trust:
            trusted[relationship[0]] -= 1
            trusted[relationship[1]] += 1

        for i in range(1, n + 1):
            if trusted[i] == n - 1:
                return i
        
        return -1
```