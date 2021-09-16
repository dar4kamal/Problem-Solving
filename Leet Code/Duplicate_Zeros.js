// * problem Link
// * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

const duplicateZeros = (nums) => {
  const oldLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = nums.length - 1; j >= i; j--) {
        nums[j + 1] = nums[j];
      }
      nums[i + 1] = 0;
      i++;
    }
  }
  nums.splice(oldLength);
};

const testCase = () => {
  const nums = [1, 0, 2, 3, 0, 4, 5, 0];
  duplicateZeros(nums);
  const correctAnswer = [1, 0, 0, 2, 3, 0, 0, 4];
  for (let i = 0; i < correctAnswer.length; i++) {
    if (correctAnswer[i] !== nums[i]) return "Test Failed";
  }
  return "Test Passed";
};

console.log(testCase());
