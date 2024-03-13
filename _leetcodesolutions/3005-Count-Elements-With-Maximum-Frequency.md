---
title: "3005 Count Elements With Maximum Frequency"
number: 3005
date: 2024-03-07
collection: leetcodesolutions
permalink: /leetcodesolutions/3005/
excerpt: Solution to [Leetcode 3005](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/)
---
# [Problem](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the total number of elements which have the maximum frequency in a list. For example, if a list contains `[1, 1, 2, 2, 3, 4]`, the answer would be 4 as there are 2 `1`'s and 2 `2`'s which is the maximum frequency. There are thus, 4 total elements that are part of the numbers that have maximum frequency.

To solve this problem we utilize a hashmap to store the frequencies of each element and then find the total unique number of elements which have a maximal frequency. We then multiply the unique number of elements with maximal frequency by the maximal frequency for the answer. 

## Approach
<!-- Describe your approach to solving the problem. -->
1. Either iterate through `nums` to populate a hashmap of frequencies called `counts` with the unique element as the key and the frequency as the value, or utilize `Counter` library.
2. Initialize `max_freq` and `uniq_elem` variables to store the maximum found frequency thus far and the number of unique elements with this frequency thus far.
3. Iterate through our hashmap to count `max_freq` and `uniq_elem`. We reset `uniq_elem` when we find a new higher frequency.
4. Return the product of `max_freq` and `uniq_elem` for the total number of elements that have maximal frequency.
   
## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through the array to populate our hashmap and then iterate through the hashmap to check the number of unique elements with maximal frequency. These iterations both take linear time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$. We utilize a hashmap for counting frequencies which takes linear space complexity.

## Code
```python
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        counts = Counter(nums)
        
        max_freq, uniq_elem = 0, 0

        for count in counts:
            if counts[count] == max_freq:
                uniq_elem += 1
            elif counts[count] > max_freq:
                max_freq = counts[count]
                uniq_elem = 1
        
        return max_freq * uniq_elem
```