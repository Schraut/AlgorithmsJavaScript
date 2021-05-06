// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(matrix) {
  const length = matrix.length;
  let diagonalLeftToRight = 0;
  let diagonalRightToLeft = 0;

  // Loop through the array to sum up the diagonals.
  for (let i = 0; i < length; i++) {
    // left-to-right diagonal
    diagonalLeftToRight += matrix[i][i];
    // right-to-left diagonal.
    diagonalRightToLeft += matrix[length - 1 - i][i];
    console.log(diagonalRightToLeft);
  }
  // return value using Math.abs() to get the absolute difference.
  return Math.abs(diagonalLeftToRight - diagonalRightToLeft);
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
