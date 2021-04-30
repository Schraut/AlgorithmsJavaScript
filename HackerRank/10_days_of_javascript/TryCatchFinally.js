// reverse a string using the split, reverse, and join methods
// if exception thrown, catch it and print the contents of exception's message on new line
// print input on new line
// if no exception thrown, reverse the string
// if exception thrown, print original string

function reverseString(s) {
  try {
    let inputArray = s.split("");
    inputArray.reverse();
    var reversedArray = inputArray.join("");
    console.log(reversedArray);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}

reverseString("hey");
