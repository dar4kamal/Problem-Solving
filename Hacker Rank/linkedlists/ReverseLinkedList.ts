// src => https://www.hackerrank.com/challenges/reverse-a-linked-list/problem

import {
  SinglyLinkedList,
  SinglyLinkedListNode,
  printSinglyLinkedList,
} from "./Models/LinkedList";

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  const head = llist;

  let temp: SinglyLinkedListNode;
  let previousNode = null;
  let currentNode = head;

  while (1) {
    temp = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    if (temp == null) break;
    currentNode = temp;
  }

  return currentNode;
}

function main(llistItems: number[]) {
  let llist: SinglyLinkedList = new SinglyLinkedList();

  llistItems.forEach((item) => {
    llist.insertNode(item);
  });

  const llist1: SinglyLinkedListNode = reverse(llist.head);

  printSinglyLinkedList(llist1, "↓");
}

const items = [1, 2, 3, 4, 5];
main(items);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
