// the input is an array of integers (nums) and an integer (target)
// return indices of the two numbers that add up to the target

var twoSum = function (nums, target) {
  //var numbers = nums.length;
  //console.log(numbers);
  // if (numbers <= 4) {
  //   console.log('nope');
  // } else {
  //   console.log('yes');
  // }

  var numbers = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        numbers.push(i, j);
        return numbers;
      }
    }
  }
  return numbers;
};

console.log(twoSum([2, 7, 11, 15], 9));
