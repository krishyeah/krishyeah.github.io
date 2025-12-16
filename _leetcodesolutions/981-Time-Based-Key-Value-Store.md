---
title: "981 Time Based Key-Value Store"
number: 981
date: 2025-12-11
collection: leetcodesolutions
permalink: /leetcodesolutions/981/
excerpt: Solution to [Leetcode 981](https://leetcode.com/problems/time-based-key-value-store/description/)
---
# [Problem](https://leetcode.com/problems/time-based-key-value-store/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to create a unique take on a map where the values are not stored just in reference to keys, but they are also stored with a timestamp. When values are being retrieved from the map, we return the value associated with the highest timestamp lower than the given timestamp.

Some key things to note are that the timestamps are always given in increasing order for the `set()` calls. This is important to note as it will determine our data structure and algorithm for storing and retrieving the values associated with the given key and timestamp. For each `get()` call, we are given: `key` and `timestamp`. Let's say we have `value1` with `timestamp1` and `value2` with `timestamp2`. We want to return the value with the highest timestamp equal to or lesser than `timestamp`. So if `timestamp2` is equal to or less than `timestamp` we return `value2`, if `timestamp2` is greater than `timestap`, we reutrn `value1` assuming that `timestamp1` is equal to or less than `timestamp`, otherwise we return `""`. 

Because the timestamps are always given in increasing order, we can use a binary search to speed up the process of finding the correct value. We could just store a list of `(timestamp, value)` pairs and then just linearly scan through the list to find our answer; however, binary search is an optimized approach for finding the results faster.

For each `key`, we update our `time_map` by appending to the `key`'s list the current `(timestamp, value)` pair. When looking for a return value during a `get(search_key, given_timestamp)` call, we can binary search to find the value with the greatest timestamp equal to or lesser than the given `given_timestamp`. When we reach a value with a timestamp less than `given_timestamp`, because this may be the greatest timestamp that is still less than `given_timestamp`, we store this value in `cur` so that we do not lose track of it. We can update this value as we go along in our binary search and it ensures that we do not lose the value as our pointers update during the search.

Some edge cases to consider for accuracy and efficiency are:
1. If the given `key` is not in our map, we return an empty string.
2. If the given timestamp is greater than the greatest timestamp in our list, we return the value associated with that greatest timestamp and we can skip our binary search.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize our custom `TimeMap` object. We use a standard dictionary or hashmap for this problem.
2. For our `set()` calls, we append to the list associated with `key` the current `(timestamp, value)` pair. If this is the first occurrence of `key`, we create a list and initialize it with our first `(timestamp, value)` pair.
3. For our `get()` calls, we check to see if `key` exists in our map, if it does not, return `""`. If `timestamp` is greater than the greatest timestamp we have come across, return the value associated with that greatest timestamp. We perform a binary search using a `cur` variable for keeping track of the word with the greatest timestamp that is lower than `timestamp`. If the pair that we are currently searching has a timestamp equal to `timestamp`, return the value. If the current timestamp is greater than the given `timestamp`, we move our binary search right pointer, `R`. If the current timestamp is less than the given `timestamp`, we store update the `cur` variable and move our binary search left pointer, `L`. If our pointers cross, this indicates we did not find the given `timestamp` in our list and so we return `cur` which is the value associated with the highest timestamp lower than `timestamp`.

## Complexity
- Time complexity:
  - `set()`: $O(1)$. We utilize a hashmap which has constant lookup times and appending to an array also has constant look up times.
  - `get()`: $O(log(k))$ where $k$ is the number of instances of current `key`. We utilize binary search which has a logarithmic time to find the value.
  
_Note: Due to the nature of this problem, the time complexities are given of each individual method call._
- Space complexity:
$O(n)$. We store each word in a hashmap utilizing linear space.

## Code
```python3 []
class TimeMap:

    def __init__(self):
        self.time_map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.time_map:
            self.time_map[key].append((timestamp, value))
        else:
            self.time_map[key] = [(timestamp, value)]
        

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.time_map:
            return ""
        key_list = self.time_map[key]
        L, R = 0, len(key_list) - 1
        if timestamp < key_list[L][0]:
            return ""
        elif timestamp >= key_list[R][0]:
            return key_list[R][1]
        cur = ""
        while L <= R:
            M = (L + R) // 2
            if key_list[M][0] == timestamp:
                return key_list[M][1]
            elif key_list[M][0] > timestamp:
                R = M - 1
            else:
                cur = key_list[M][1]
                L = M + 1
            
        return cur
        

            

# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```