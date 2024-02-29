---
title: "2971 Find Polygon With the Largest Perimeter"
number: 2971
date: 2024-02-15
collection: leetcodesolutions
permalink: /leetcodesolutions/2971/
excerpt: Solution to [Leetcode 2971](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/)
---
# [Problem](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/)

# Solution 1 - O(n) Space

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the perimeter of the longest polygon that can be formed using the edge lengths given in `nums`. This problem seems tricky at first; however, by understanding the geometry of polygons as provided in the problem description, the solution is fairly intuitive.

The longest edge in a polygon must be lesser than the sum of all shorter edges used in a polygon. By understanding this key fact, we see that we can simply sort the array of edge lengths, `nums`, and for each edge, check it against the sum of the previous edges. If it is lower than the sum, we can add it to our longest possible polygon and check the next longest edge. When we reach an edge that is longer than the current sum of edges, we do not add it to the polygon as it will not form a valid polygon.

We can utilize some additional space to store the summed lengths of smaller edges after sorting and then iterate backwards to find the longest possible perimeter which has the longest possible edge as part of a valid polygon.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Sort `nums`
2. Initialize an array to store the sums of elements upto the current position, `sums`.
3. Make the first element of `sums` equal to the first element in `nums`.
4. Populate `sums` by iterating through `nums` and adding the current element to the sum in the previous index.
5. Iterate backwards through `nums` to find the longest edge which is less than the sum of its shorter edges.
6. Return the sum including the longest edge if any edge satisfies the geomtric relationship, or return -1 if no edge does.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n))$. We sort which dominates our run time. We also use two iterations through the length of the input array. $O(n*\log(n)) + O(n) + O(n) \rightarrow O(n*\log(n))$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize an array for storing sums.

## Code
```python
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        nums_len = len(nums)
        sums = [0] * nums_len
        sums[0] = nums[0]
        
        for i in range(1, nums_len):
            sums[i] = sums[i - 1] + nums[i]

        for i in range(nums_len - 1, 1, -1):
            if nums[i] < sums[i - 1]:
                return sums[i]

        return -1
```

# Solution 2 - O(1) Space

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We realize from the first approach that at any given point we are only comparing the total sum of the previous elements. We only access `sums[i-1]` in all cases to update `sums[i]` and therefore we can replace the array with simply a variable while counting up the values.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Sort `nums`
2. Initialize our intial sum of previous values, `prev_sum` to be 0.
3. Initialize our answer variable to be -1 as we will return -1 if we do not find a possible polygon.
4. Iterate through each edge length in `nums`. For each edge length, if the length is smaller than `prev_sum`, update the answer to be the sum of `prev_sum` and the current edge length. Update `prev_sum` to include the current edge length even if it does not form a valid polygon. 

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n*\log(n))$. We sort which dominates our run time. We also use two iterations through the length of the input array. $O(n*\log(n)) + O(n) + O(n) \rightarrow O(n*\log(n))$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize constant space to keep track of the previous sums.

## Code
```python
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        prev_sum = 0
        ans = -1
        for num in nums:
            if num < prev_sum:
                ans = num + prev_sum
            prev_sum += num
        return ans
```