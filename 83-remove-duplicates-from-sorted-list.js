// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 
// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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

var deleteDuplicates = function(head) {
  // initialize a pointer (current) with the address of head node
  var current = head;

  // traverse all elements through a while loop
  while(current) {
    // if current node and the next node of current node are present && if the value of current is equal to the value of next it means the value is present in the linked list, so we don't need to include current again in the linked list so we increment the value of current
    if (current.next !== null && current.val == current.next.val) {
        current.next = current.next.next;
    // otherwise, we increment the current pointer
    } else {
        current = current.next;
    }
  }
  // return the sorted linked list without any duplicate elements
  return head;
};

