// src => https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings: string[], queries: string[]): number[] {
  return queries.map(
    (query) => strings.filter((string) => string === query).length
  );
}

const strings = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];
const queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

console.log(matchingStrings(strings, queries));

// for solving typescript module error which about
// duplicated variables' names across different files in the same directory.
export {};
