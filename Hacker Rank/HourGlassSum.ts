// src => https://www.hackerrank.com/challenges/2d-array/problem?h_r=next-challenge&h_v=zen

const sumMany = (args: number[]): number => {
  return args.reduce((sum, item) => {
    return sum + item;
  }, 0);
};

const getWindowValues = (
  i: number,
  j: number,
  arr: number[][]
): [number, number, number, number, number, number, number] => {
  let a = arr[j][i];
  let b = arr[j][i + 1];
  let c = arr[j][i + 2];

  let d = arr[j + 1][i + 1];

  let e = arr[j + 2][i];
  let f = arr[j + 2][i + 1];
  let g = arr[j + 2][i + 2];

  return [a, b, c, d, e, f, g];
};

const hourglassSum = (arr: number[][]) => {
  const sum: number[] = [];

  const length = arr[0].length - 2;
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length; i++) {
      sum.push(sumMany(getWindowValues(i, j, arr)));
    }
  }

  return Math.max(...sum);
};

const test_hgs = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(test_hgs));
