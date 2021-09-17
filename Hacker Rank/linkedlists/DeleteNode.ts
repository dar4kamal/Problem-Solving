// src => https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem

import {
  SinglyLinkedList,
  SinglyLinkedListNode,
  printSinglyLinkedList,
} from "./Models/LinkedList";

function deleteNode(
  llist: SinglyLinkedListNode,
  position: number
): SinglyLinkedListNode {
  const head = llist;

  if (position == 0) {
    llist = llist.next;
    return llist;
  }

  let cnt = 0;
  // traverse linked list
  while (llist.next != null && cnt < position - 1) {
    llist = llist.next;
    cnt++;
  }

  let temp = llist.next;
  llist.next = temp.next;
  return head;
}

function main(llistItems: number[], position: number) {
  let llist: SinglyLinkedList = new SinglyLinkedList();

  llistItems.forEach((item) => {
    llist.insertNode(item);
  });

  const modifiedlist: SinglyLinkedListNode = deleteNode(llist.head, position);

  printSinglyLinkedList(modifiedlist, "↓");
}

const items = [11, 12, 8, 18, 16, 5, 18];
const position = 0;

main(items, position);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
