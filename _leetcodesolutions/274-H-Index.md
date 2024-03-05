---
title: "274 H-Index"
number: 274
date: 2024-02-29
collection: leetcodesolutions
permalink: /leetcodesolutions/274/
excerpt: Solution to [Leetcode 274](https://leetcode.com/problems/h-index/description/)
---
# [Problem](https://leetcode.com/problems/h-index/description/)

# Solution 1 - O(n + k) Time Complexity, O(n) Space Complexity

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to calculate the H-index of a given list of citations. The H-index is defined as the largest number, `h`, where a person has at least `h` papers with at least `h` citations each. We are given a list that contains all of the citations that a person has and want to find the H-index of this person.

We can find the number of papers with a certain number of citations and then iterate through this in order to find the first point where the number of papers is greater than or equal to the citations that we are looking for. We return this citation number as the H-index.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Create a dictionary, `counts`, for storing the number of papers that have received a certain number of citations.
2. Iterate through the dictionary and increment the number of papers that have received that amount of citations.
3. Find the most cited paper to use for our highest bound.
4. Decrement through the values while searching the dictionary. Return when we find the H-index of the author.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n + k)$. We iterate through each citation and then iterate through the maximum number of citations that a single paper recieved. Per the constraints of the problem, the number of citations has a lower bound than the total number of papers; however, this solution is not polynomial in time complexity as it does not have a polynomial scaling against the input size.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a dictionary for storing the number of papers with a certain number of citations.

## Code
```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        counts = {}

        for cite in citations:
            counts[cite] = counts.get(cite, 0) + 1
        
        max_cite = max(citations)

        count = 0
        for i in range(max_cite, -1, -1):
            count += counts.get(i, 0)
            if count >= i:
                return i
        
        return 0
```

# Solution 2 - O(n * log(n)) Time Complexity, O(n) Space Complexity

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This secondary approach is polynomial in time complexity even though it may be slower in some cases than the first solution. We first sort the number of citations and then iterate backwards through the list of citations in order to find the first point at which the number of papers is greater than the number of citations.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Sort `citations`
2. Perform binary search on the citations to find the highest number for which there are `n - mid` (total number of papers with at least this many citations)
3. Return the answer when the binary search completes.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n))$. We sort and then perform binary search. $O(n*\log(n)) +O(\log(n)) \rightarrow O(n*\log(n))$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. Sorting in Python utilize O(n) space.

## Code
```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort()
        n = len(citations)
        ans = 0

        start, end = 0, n - 1
        while start <= end:
            mid = start + (end - start) // 2
            if citations[mid] >= n - mid:
                ans = max(ans, n - mid)
                end = mid - 1
            else:
                start = mid + 1

        return ans
```