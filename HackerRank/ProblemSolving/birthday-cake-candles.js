// Birthday Cake Candles
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for
// each year of their total age. They will only be able to blow out the tallest of the candles. Count how
// many candles are tallest.

function birthdayCakeCandles(candles) {
  var maxHeightOfCandles = Math.max(...candles); // gets the highest number so we can compare it to each number in the array.
  let tallestCandles = 0; // count of tallest candles

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == maxHeightOfCandles) {
      // compare each number to maxHeightOfCandles
      tallestCandles++; // add to count if it's the highest number in array.
    }
  }

  console.log(tallestCandles);
  return tallestCandles;
}
birthdayCakeCandles([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 3]);
