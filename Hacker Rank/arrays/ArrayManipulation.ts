// src => https://www.hackerrank.com/challenges/crush/problem
``;
function arrayManipulation(n: number, queries: number[][]): number {
  let arr = new Array<number>(n + 1).fill(0);

  queries.forEach((query: number[]) => {
    const a = query[0];
    const b = query[1];
    const k = query[2];

    arr[a] += k;
    if (b + 1 <= n) arr[b + 1] -= k;
  });

  let innerSum = 0;
  let max = 0;
  arr.forEach((item: number) => {
    innerSum += item;
    if (max < innerSum) max = innerSum;
  });

  return max;

  // Time Out of bound Error
  // With these solution

  // arr = [
  //   ...arr.slice(0, a - 1),
  //   ...arr.slice(a - 1, b).map((item) => item + k),
  //   ...arr.slice(b, arr.length),
  // ];

  // arr.filter((_item, idx) => {
  //   if (idx + 1 >= a && idx + 1 <= b) arr[idx] += k;
  //   return idx + 1 >= a && idx + 1 <= b;
  // });

  // for (let i = a; i <= b; i++) {
  //   arr[i-1] += k;
  // }

  // arr = arr.map((item, idx) =>
  //   idx + 1 >= a && idx + 1 <= b ? k + item : item
  // );
}

const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

console.time("start");
console.log(arrayManipulation(n, queries));
console.timeLog("start");

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
