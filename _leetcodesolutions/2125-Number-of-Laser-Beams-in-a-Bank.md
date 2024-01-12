---
title: "2125 Number of Laser Beams in a Bank"
number: 2125
date: 2024-01-03
collection: leetcodesolutions
permalink: /leetcodesolutions/2125/
excerpt: Solution to [Leetcode 2125](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/)
---
# [Problem](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to find the total number of laser beams that a bank security has subject to the constraints that all security devices have lasers to the security devices in the firrt following row to also have security devices. There are also no lasers to security devices on the same row.

This explanation is sort of complicated, but to break it down, if a row has 3 security devices, the following row has no devices, and the row after that has 2 security devices, there will be 6 total lasers beams as each of the 3 devices will have a laser beam to each of the 2 next devices in the system.

Understanding how the laser beam criteria works lends itself to a fairly simple solution. Each device will have a beam to each device in the following row that has at least 1 device. Therefore, we can just keep track of the number of devices in a previous row, and then iterate through rows until our current row also has a device. Once we find a row with devices, we multiply the number of devices between both rows to find the number of beams, and update our tracker for the previous row's devices.
 
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize `total_beams` to be `0`. This is what we will return.
2. Initialize `prev_row` to be `0`. This will keep track of the number of devices in the last row to have any devices.
3. Iterate through the rows in the bank counting the number of devices in each row. If a row has devices, multiply by the number of devices in the previous row with devices, add this sum to our result, and update `prev_row` for multiplication with the next row with devices.
4. Return `total_beams`.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(m*n)$. We iterate through each of `n` rows, and we also iterate through each of `m` characters in each row.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We only store a few variables so our space used is constant.

## Code
```python
class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        total_beams = 0
        prev_row = 0

        for row in bank:
            cur_row = row.count('1')
            if cur_row:
                total_beams += cur_row * prev_row
                prev_row = cur_row

        return total_beams
```