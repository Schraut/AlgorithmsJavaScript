// Simple Array Sum

// Given an array of integers, find the sum of its elements.
// For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6, so return 6.

function simpleArraySum(n, ar) {
  // use the reduce() function to add all numbers together
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let myArray = ar.reduce(reducer);
  console.log(myArray);
  return myArray;
}

simpleArraySum(6, [1, 2, 3, 4, 10, 11]);
