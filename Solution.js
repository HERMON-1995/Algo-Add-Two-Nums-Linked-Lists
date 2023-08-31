/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (l1, l2, carry) =>{
    if(!l1 && !l2 && !carry) {
        return null;
    }
    let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + (carry || 0);
    carry = Math.floor(sum/10);
    return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};

console.log(addTwoNumbers());
