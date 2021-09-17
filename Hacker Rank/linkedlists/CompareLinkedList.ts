// src => https://www.hackerrank.com/challenges/compare-two-linked-lists/problem

function comapreLinkedList(a: number[], b: number[]): number {
  if (a.length != b.length) return 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return 0;
    }
  }
  return 1;
}

function main(llistItems1: number[], llistItems2: number[]) {
  console.log(comapreLinkedList(llistItems1, llistItems2));
}

const list1 = [1, 2];
const list2 = [1];

const list3 = [1, 2];
const list4 = [1, 2];
main(list3, list4);

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
