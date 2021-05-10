// Staircase
// https://www.hackerrank.com/challenges/staircase/problem

// int n: is an integer
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    // set i to 1 to add correct amount of spaces and print at least one # on the first line. It will scale up.
    // use the repeat() function to print the number of blank spaces and #'s.
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

staircase(6);

//   console.log(
//     '     #' +
//       '\n' +
//       '    ##' +
//       '\n' +
//       '   ###' +
//       '\n' +
//       '  ####' +
//       '\n' +
//       ' #####' +
//       '\n' +
//       '######'
//   );
