// Day 9: Recursion 3
// https://www.hackerrank.com/challenges/30-recursion/problem?h_r=next-challenge&h_v=zen

const factorial = (n) => {
  // if it's 1 or when it hits one then return
  if (n <= 1) {
    console.log(n);
    return n;
    // if it's not 1, keep using recursion until it hits zero
  } else {
    let result = n * factorial(n - 1);
    console.log(result);
    return result;
  }
};

factorial(3); //  3! = 3 * 2 * 1 = 6

// https://www.mathsisfun.com/numbers/factorial.html
// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.
