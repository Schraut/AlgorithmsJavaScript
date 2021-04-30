// find the second largerst number in the array

function getSecondLargest(nums) {
  let largestNum = Math.max(...nums);
  let filteredNums = [];
  let secondLargest;

  console.log(largestNum);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== largestNum) {
      filteredNums.push(nums[i]);
    }
  }
  secondLargest = Math.max(...filteredNums);

  console.log(secondLargest);
  return secondLargest;
}

getSecondLargest([1, 2, 3, 4, 5, 6]);
