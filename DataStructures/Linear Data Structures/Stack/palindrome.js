// Palindrome
// freecodecamp youtube channel
// https://www.youtube.com/watch?v=t2CEgPsws3U

let letters = []; // this is a stack

let word = 'racetruck';

let reverseword = '';
// use a for loop to put each letter into a stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
  //console.log(word[i]);
}
//console.log(letters);
for (var i = 0; i < word.length; i++) {
  reverseword += letters.pop();
  //console.log(letters[i]);
}
console.log(reverseword);
if (reverseword === word) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not a palindrome');
}
