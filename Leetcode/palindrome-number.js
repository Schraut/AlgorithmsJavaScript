// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let changeToString = x.toString().split('').reverse().join('');
  //console.log(typeof changeToString);
  let changeBackToNum = parseInt(changeToString);
  //console.log(typeof changeBackToNum);

  if (x < 0) {
    console.log('It was negative and is not a palindrome');
    return changeBackToNum * -1;
  } else if (x === changeBackToNum) {
    console.log('Yeah buddy');
    return true;
  } else {
    console.log('Nope');
  }
};

isPalindrome(-121);
