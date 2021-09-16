// * problem Link
// * https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

const findNumbers = (nums) => {
  let evenDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) evenDigits++;
  }
  return evenDigits;
  /*
    * Using Map
    return nums.reduce((acc, num) => {
      if (num.toString().length % 2 == 0) return acc + 1;
      else return acc;
    }, 0);
    
  */
};

const testCase = () => {
  const nums = [12, 345, 2, 6, 7896];
  const output = findNumbers(nums);
  const correctAnswer = 2;
  if (output == correctAnswer) return "Test Passed ";
  else return "Test Failed";
};

console.log(testCase());
