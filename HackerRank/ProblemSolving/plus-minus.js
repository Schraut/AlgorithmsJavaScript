// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus/problem
// Given an array of integers, calculate the ratios of its elements
// that are positive, negative, and zero. Print the decimal value
// of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  var positive = 0;
  var negative = 0;
  var zero = 0;

  for (let i = 0; i < arr.length; i++) {
    // use Math.sign() to return 1, -1, or 0
    if (Math.sign(arr[i]) == 0) {
      zero++;
    } else if (Math.sign(arr[i]) == 1) {
      positive++;
    } else if (Math.sign(arr[i]) == -1) {
      negative++;
    }
  }
  //  use .toFixed() to handle the amount of decimal places
  var posFraction = (positive / arr.length).toFixed(6);
  var negFraction = (negative / arr.length).toFixed(6);
  var zeroFraction = (zero / arr.length).toFixed(6);
  // you can return multiple console.logs with a comma
  return (
    console.log(posFraction),
    console.log(negFraction),
    console.log(zeroFraction)
  );
}

plusMinus([-4, 3, -9, 0, 4, 1]);
