// * problem Link
// * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

const sortedSquares = (nums) => {
  const squares = [];
  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] ** 2);
  }
  return squares.sort((a, b) => a - b);
  /*
    * Using map       
    return nums.map(num => num ** 2).sort((a, b) => a - b);
    */
};

const testCase = () => {
  const nums = [-7, -3, 2, 3, 11];
  const output = sortedSquares(nums);
  const correctAnswer = [4, 9, 9, 49, 121];
  for (let i = 0; i < correctAnswer.length; i++) {
    if (correctAnswer[i] !== output[i]) return "Test Failed";
  }
  return "Test Passed ";
};

console.log(testCase());
