---
title: "2816 Double a Number Represented as a Linked List"
number: 2816
date: 2024-05-06
collection: leetcodesolutions
permalink: /leetcodesolutions/2816/
excerpt: Solution to [Leetcode 2816](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/)
---
# [Problem](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/)

# Solution

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem requires us to double a number that is stored in a linked list. 

To solve this problem, we use a two-pointer approach keeping track of the current node and the previous node. We must keep track of the previous node in order to help with the carryover when multiplying a number that is 5 or greater by 2.

We can check the first value and create a new node if the first node needs to be doubled, otherwise for every node, if the current number is 5 or greater, we double it and take the modulo 10 of that number and increment the previous nodes value, otherwise, we just double the value in the current node. We continue this process while there are nodes to double.
## Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize pointers to a previous and current nodes.
2. For the first node, if it is greater than or equal to 5, create a new node set to 1 and make it the head node. Otherwise, just double the node.
3. Iterate the previous and current node pointers.
4. While there remains a current node to process, double the node while incrementing the previous node when necessary.
5. Return the head of the list.

## Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$. We iterate through each node and perform constant time operations per node.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(1)$. We utilize a few pointers that utilize constant space.

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
    ListNode* doubleIt(ListNode* head) {
        ListNode* prv_node;
        ListNode* cur_node;
        if (head->val >= 5) {
            prv_node = new ListNode(1);
            cur_node = head;
            prv_node->next = cur_node;
            cur_node->val = (cur_node->val * 2) % 10;
            head = prv_node;
        }
        else {
            prv_node = new ListNode(0);
            cur_node = head;
            cur_node->val *= 2;
        }
        prv_node = cur_node;
        cur_node = cur_node->next;

        while (cur_node) {
            if (cur_node->val >= 5) {
                prv_node->val += 1;
                cur_node->val = (cur_node->val * 2) % 10;
            }
            else {
                cur_node->val *= 2;
            }
            prv_node = cur_node;
            cur_node = cur_node->next;
        }
        return head;
    }
};
```