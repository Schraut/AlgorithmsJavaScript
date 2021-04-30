'use strict'; // use strict helps write better code and prevents using undeclared variables

// Loop through a string and take out the vowels first
// Second print the consonants
// print each character on a new line

function vowelsAndConsonants(s) {
    // an array of vowels to compare the input string
    const vowels = ["a", "e", "i", "o", "u"];
    // an array to hold each character of the string so it can be looped through
    const arrayBox = s.split("");
    // variable to hold vowelsfound
    var vowelsFound = [];
    // variable to hold constonants
    var consonants = [];
    
    for (var i in arrayBox) {
        //console.log(arrayBox[i]);
       if( vowels.includes(arrayBox[i])) {
           vowelsFound.push(arrayBox[i]);
       } else {
           consonants.push(arrayBox[i]);
       }
    }
    console.log(vowelsFound.join('\n') + '\n' + consonants.join('\n'));
    return vowelsFound.join('\n') + '\n' + consonants.join('\n')
}

vowelsAndConsonants("javascriptloop");