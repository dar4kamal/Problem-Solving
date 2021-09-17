// src => https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotateLeft(d: number, arr: number[]): number[] {
  const temp: number[] = [];

  for (let i = 0; i < d; i++) {
    temp.push(arr.splice(0, 1)[0]);
  }
  return [...arr, ...temp];
}

const d = 4;
const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(d, arr));

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
