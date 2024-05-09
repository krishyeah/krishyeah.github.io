---
title: "83 Remove Duplicates from Sorted List"
number: 83
date: 2024-05-05
collection: leetcodesolutions
permalink: /leetcodesolutions/83/
excerpt: Solution to [Leetcode 83](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
---
# [Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to take a sorted list and return the list with all of its duplicates removed while keeping the list sorted.

To brute force this solution, we can iterate through the list and store values in a set or array and continue to add new values only. Then after we iterate through the entire list, we can create a new list from the unique values that are still sorted.

We can do better however by working directly on the given list. To remove the duplicate nodes, we simply remove a pointer to that node and this will remove the node from the list. We traverse the list and if we encounter a duplicate node, we continue iterate until e find the next unique node and then point from our current node to the next unique node. We continue this process until we iterate through the list of nodes.

## Approach
<!-- Describe your approach to solving the problem. -->
1. Check our base case of having an empty list and return the empty list.
2. Create a pointer to the head node which is our current first node. Create a pointer to the next node which will be the first node we will check against.
3. While there is a next node to check, if the values of the nodes are different, we iterate both nodes forwards. If the values are the same, we continue iterating the next node unitl we find the next unique node and make the current node point to this next unique node. Then we iterate both nodes forwards. If we go to the end of the list, this means that the current node is the last unique node in the list so we make it point to `NULL` and then return the list.
4. We return the list after there is no next unique node to find.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each node and perform constant time operations on each node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize two pointers to nodes which takes constant space.

## Code
```C++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == NULL) {
            return head;
        }
        
        ListNode* cur_node = head;
        ListNode* nxt_node = head->next;

        while (nxt_node) {
            if (nxt_node->val != cur_node->val) {
                cur_node = nxt_node;
                nxt_node = nxt_node->next;
            }
            else {
                while (nxt_node && nxt_node->val == cur_node->val) {
                    nxt_node = nxt_node->next;
                }
                if (nxt_node == NULL) {
                    cur_node->next = NULL;
                    return head;
                }
                cur_node->next = nxt_node;
                cur_node = nxt_node;
                nxt_node = nxt_node->next;
            }
        }
        return head;
    }
};
```