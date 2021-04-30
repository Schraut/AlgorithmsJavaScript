// Complete the getGrade(score) function in the editor. It has one parameter: an integer, ,
// denoting the number of points Julia earned on an exam. It must return the letter
// corresponding to her  according to the following rules:

function getGrade(score) {
  let grade;

  if (score > 25) {
    grade = "A";
    console.log(score + grade);
  } else if (score > 20) {
    grade = "B";
    console.log(score + grade);
  } else if (score > 15) {
    grade = "C";
    console.log(score + grade);
  } else if (score > 10) {
    grade = "D";
    console.log(score + grade);
  } else if (score > 5) {
    grade = "E";
    console.log(score + grade);
  } else {
    grade = "F";
    console.log(score + grade);
  }

  return grade;
}

getGrade(5);
