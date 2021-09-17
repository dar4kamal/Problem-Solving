// src => https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem

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

function getNode(
  llist: SinglyLinkedListNode,
  positionFromTail: number
): number {
  const reversedList = reverse(llist);
  let currentNode = reversedList;
  let count = 0;

  while (currentNode != null && count < positionFromTail) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode.data;
}

function main(llistItems: number[], positionFromTail: number) {
  let llist: SinglyLinkedList = new SinglyLinkedList();

  llistItems.forEach((item) => {
    llist.insertNode(item);
  });

  console.log(getNode(llist.head, positionFromTail));
}

const items = [3, 2, 1, 0];
const positionFromTail = 2;
main(items, positionFromTail);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
