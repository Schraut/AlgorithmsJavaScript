// A Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// In this challenge, you are required to calculate and print the
// sum of the elements in an array, keeping in mind that some of
// those integers may be quite large.

function aVeryBigSum(n, ar) {
  //console.log(ar);
  // Use reduce() to add all the elements together
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let myArray = ar.reduce(reducer);
  console.log(myArray);
  return myArray;
}

aVeryBigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
