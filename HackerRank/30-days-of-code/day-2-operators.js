// Day 2: Operators
// https://www.hackerrank.com/challenges/30-operators/problem

// given meal price, tip, and tax percentage
// find and print total cost
// round result to nearest integer

function solve(meal_cost, tip_percent, tax_percent) {
  let tip = (meal_cost / 100) * tip_percent;
  let tax = (tax_percent / 100) * meal_cost;

  console.log(Math.round(meal_cost + tip + tax));
  return Math.round(meal_cost + tip + tax);
}

solve(12.0, 20, 8);
