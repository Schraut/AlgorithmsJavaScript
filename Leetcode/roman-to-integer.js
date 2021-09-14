// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

// var romanToInt = function (s) {
//   // split the input into an array
//   let input = s.split('');
//   const romanNumerals = new Map();
//   romanNumerals.set('I', 1);
//   romanNumerals.set('V', 5);
//   romanNumerals.set('X', 10);
//   romanNumerals.set('L', 50);
//   romanNumerals.set('C', 100);
//   romanNumerals.set('D', 500);
//   romanNumerals.set('M', 1000);

//   input.forEach((element) => {
//     console.log(romanNumerals.get(element));

//     element + romanNumerals.get(element);
//     console.log(element);
//     // if (element === romanNumerals.has(element)) {
//     //   console.log(romanNumerals.get(element));
//     // }
//   });
//   //console.log(romanNumerals);
//   //console.log(Object.values(romanNumerals));
//   //console.log(input);
//   //console.log(romanNumerals.get('I'));
//   //   if (romanNumerals.has('I')) {
//   //     console.log('Sup');
//   //   }
// };
const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let first = s.charAt(i);
    if (map[s.charAt(i + 1)] > 0 && map[s.charAt(i)] < map[s.charAt(i + 1)]) {
      first += s.charAt(i + 1);
      ++i;
    }
    res += map[first];
  }
  console.log(res);
  return res;
};
romanToInt('III');
