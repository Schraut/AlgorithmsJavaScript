// Day 8: Dictionaries and Maps
// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
  // split the input into an array
  input = input.split('\n');
  // the first element in the array is a number so this decides how many contacts to create
  var N = parseInt(input[0]);
  // create phonebook with an empty array
  var phonebook = [];
  // loop through to create contacts of phonebook
  for (var i = 0; i < N; i++) {
    var line = input[i + 1];
    line = line.split(' ');
    phonebook[line[0]] = line[1];
  }

  for (var i = N + 1; i < input.length; i++) {
    var num = phonebook[input[i]];
    if (num !== undefined) {
      console.log(input[i] + '=' + num);
    } else {
      console.log('Not found');
    }
  }
}

processData('3 sam 99912222 tom 11122222 harry 12299933 sam edward harry');
