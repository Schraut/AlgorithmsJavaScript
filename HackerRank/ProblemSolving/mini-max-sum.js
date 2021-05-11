// Mini-Max Sum
// https://www.hackerrank.com/challenges/mini-max-sum/problem

// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers. Then print the respective minimum and maximum
// values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b); // reduce the array to get the total

  let maxVal = Math.max(...arr); // takes out highest number in the array.

  let minVal = Math.min(...arr); // takes out lowest number in the array.

  console.log(sum - maxVal + ' ' + (sum - minVal));
  // sum of array minus highest number and sum of array minus lowest number.
}

miniMaxSum([1, 3, 5, 7, 9]);
