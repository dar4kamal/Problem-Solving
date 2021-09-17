// src => https://www.hackerrank.com/challenges/dynamic-array/problem

const dynamicArray = (n: number, queries: number[][]): number[] => {
  const arr = new Array<number[]>(n).fill(new Array<number>());
  const answers = new Array<number>();

  let lastAnswer = 0;
  for (let i = 0; i < queries.length; i++) {
    const queryType = queries[i][0];
    const x = queries[i][1];
    const y = queries[i][2];
    const idx = (x ^ lastAnswer) % n;
    if (queryType == 1) {
      arr[idx] = [...arr[idx], y];
    } else {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }
  return answers;
};

const n = 2;
const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

console.log(dynamicArray(n, queries));

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
