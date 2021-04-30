// complete function with one parameter, s and its a string.
// it cosists of of lowercase letters
// it will return an upcase letter

function getLetter(s) {
  let letter;

  // return if one of these cases is true
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
    default:
      console.log("broken");
      break;
  }
  console.log(letter);
  return letter;
}

getLetter("n");
