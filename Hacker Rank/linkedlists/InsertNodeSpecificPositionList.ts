// src => https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

import {
  SinglyLinkedList,
  SinglyLinkedListNode,
  printSinglyLinkedList,
} from "./Models/LinkedList";

function insertNodeAtPosition(
  llist: SinglyLinkedListNode,
  data: number,
  position: number
): SinglyLinkedListNode {
  const head = llist;
  const newNode = new SinglyLinkedListNode(data);

  if (llist.next == null) return newNode;
  if (position == 0) {
    newNode.next = llist;
    return newNode;
  }

  let cnt = 0;
  // traverse linked list
  while (llist.next != null && cnt < position - 1) {
    llist = llist.next;
    cnt++;
  }

  let temp = llist.next;
  llist.next = newNode;
  newNode.next = temp;
  return head;
}

function main(llistItems: number[], data: number, position: number) {
  let llist: SinglyLinkedList = new SinglyLinkedList();

  llistItems.forEach((item) => {
    llist.insertNode(item);
  });

  const llist_head: SinglyLinkedListNode = insertNodeAtPosition(
    llist.head,
    data,
    position
  );

  printSinglyLinkedList(llist_head, "↓");
}

const items = [16, 13, 7];
const data = 1;
const position = 2;

main(items, data, position);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
