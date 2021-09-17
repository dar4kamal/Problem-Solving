// src => https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a: number[]): number[] {
  return a.reverse();
}

const test_ra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(reverseArray(test_ra));

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
