// Day 1: Data Types
// https://www.hackerrank.com/challenges/30-data-types/problem

function main() {
  var i = 4;
  var d = 4.0;
  var s = 'HackerRank ';
  // Declare second integer, double, and String variables.
  var secondInt, secondDouble, secondStr;
  // Read and save an integer, double, and String to your variables.
  secondInt = +readLine();
  secondDouble = +readLine();
  secondStr = readLine();
  // Print the sum of both integer variables on a new line.
  console.log(i + secondInt);
  // Print the sum of the double variables on a new line.
  console.log(d + secondDouble).toFixed(1);
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + secondStr);
}

main();
