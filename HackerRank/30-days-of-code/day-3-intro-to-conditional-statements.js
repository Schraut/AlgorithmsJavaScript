// Day 3: Intro to Conditional Statements
// https://www.hackerrank.com/challenges/30-conditional-statements/problem

function weird(n) {
  if (n % 2 != 0) {
    console.log('Weird');
    return;
  }

  if (n % 2 == 0) {
    if (n < 5) {
      console.log('Not Weird');
    } else if (6 <= n && n <= 20) {
      console.log('Weird');
    } else if (n > 20) {
      console.log('Not Weird');
    }
  }
}

weird(4);
weird(6);
weird(22);
