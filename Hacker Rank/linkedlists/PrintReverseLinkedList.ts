// src => https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem

import { SinglyLinkedList, SinglyLinkedListNode } from "./Models/LinkedList";

function reversePrint(llist: SinglyLinkedListNode): void {
  let currentNode = llist;
  let values = [];
  while (currentNode != null) {
    values.push(currentNode.data);
    currentNode = currentNode.next;
  }
  values = values.reverse();
  values.forEach((value) => console.log(value));

  // another solution
  // reverse linked list
  // const head = llist;

  // let temp: SinglyLinkedListNode;
  // let previousNode = null;
  // let currentNode = head;

  // while (1) {
  //   temp = currentNode.next;
  //   currentNode.next = previousNode;
  //   previousNode = currentNode;
  //   if (temp == null) break;
  //   currentNode = temp;
  // }

  // while (currentNode != null) {
  //   console.log(currentNode.data);
  //   currentNode = currentNode.next;
  // }
}

function main(llistItems: number[]) {
  let llist: SinglyLinkedList = new SinglyLinkedList();

  llistItems.forEach((item) => {
    llist.insertNode(item);
  });

  reversePrint(llist.head);
}

const items = [16, 12, 4, 2, 5];

main(items);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
