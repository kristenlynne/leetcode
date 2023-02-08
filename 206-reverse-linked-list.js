// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []
 
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// recursive solution
var reverseList = function(head) {
  if (!head || !head.next) {
      return head
  }
  let temp = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
};

// recursive solution
var reverseList = function(head, prev = null) {
  if (!head) return prev;

  let next = head.next;
  head.next = prev;

  return reverseList(next, head);
};

// iterative solution with 3 pointers
var reverseList = function(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;       
    current.next = prev;          
    prev = current;                 
    current = next;         
  }

  return prev;
}

// iterative solution
var reverseList = function(head) {
  let previous = null;

  while (head) {
      let next = head.next;
      head.next = previous;
      previous= head
      head = next;
  }

  return previous;
};