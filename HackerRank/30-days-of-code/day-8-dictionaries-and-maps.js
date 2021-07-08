// Day 8: Dictionaries and Maps
// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

// TO BE CONTINUED....
// I was able to create a phonebook and but not finished.

function processData(input) {
  // split the input into an array
  contactInput = input.split(' ');
  // the first element in the array is a number so this decides how many contacts to create
  let numberOfEntries = contactInput[0];
  let phonebook = new Map(); // create a map to store key value pairs
  //console.log(contactInput);
  // create a phonebook with a for loop
  for (let i = 1; i <= numberOfEntries * 2; i += 2) {
    phonebook.set(contactInput[i], contactInput[i + 1]);
    //console.log(phonebook);
  }
  console.log(Array.from(phonebook));
  // phonebook.forEach(function (value, key) {
  //   console.log(key + ' = ' + value);
  // });
  //console.log(phonebook);
  // loop through phone book
  //if (phonebook.has('sam')) console.log(phonebook.get('sam'));
  // for (let i = 0; i < contactInput.length; i++) {
  //   if (phonebook.has(contactInput[i]))
  //     console.log(phonebook.get(contactInput[i]));
  //   //console.log(phonebook.get(input[i]));
  //   //else console.log('Not found');
  //   // if (phonebook.has(contactInput[i])) {
  //   //   console.log(contactInput[i] + '=' + phonebook[contactInput[i]]);
  //   // } else {
  //   //   console.log('Not found');
  //   // }
  //   //console.log(phonebook.keys());
  // }
}

processData('3 sam 99912222 tom 11122222 harry 12299933 sam edward harry');

// Sudo code
// first element is a number and that's how many entries there will be
// make a phonebook the size of the first element
//
