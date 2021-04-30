// the input is an Int
// if it is positive, return the string "YES"
// else it will throw an error
// if input is 0, throw error message "Zero Error"
// if input is negative, throw error message "Negative Error"

function isPositive(a) {
  //console.log(a);
  if (a > 0) {
    console.log("YES");
    return "YES";
  } else if (a == 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}

isPositive(0);
