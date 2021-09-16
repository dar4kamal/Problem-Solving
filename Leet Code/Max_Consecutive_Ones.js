// * problem Link
// * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

const findMaxConsecutiveOnes = (nums) => {
  let maxOnes = 0;
  let currentOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) currentOnes += 1;
    else {
      maxOnes = currentOnes > maxOnes ? currentOnes : maxOnes;
      currentOnes = 0;
    }
  }

  return Math.max(currentOnes, maxOnes);
};

const testCase = () => {
  const nums = [1, 1, 0, 1, 1, 1];
  const output = findMaxConsecutiveOnes(nums);
  const correctAnswer = 3;
  if (output == correctAnswer) return "Test Passed ";
  else return "Test Failed";
};

console.log(testCase());
