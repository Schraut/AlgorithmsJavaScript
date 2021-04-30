// complete function
// takes in an array called nums
// if element is even, multiply element by 2
// if element is odd, multiply element by 3
// return modified array

function modifyArray(nums) {
  let arr = [];

  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i] * 2);
      console.log(nums[i] + "even");
    } else {
      arr.push(nums[i] * 3);
      console.log(nums[i] + "odd");
    }
  }
  console.log(arr);
}

modifyArray([3, 2, 3, 4, 5]);
