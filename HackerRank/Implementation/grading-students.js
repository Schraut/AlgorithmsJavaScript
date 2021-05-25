// Grading Students
// https://www.hackerrank.com/challenges/grading/problem

// Challenge is not complete
function gradingStudents(grades) {
  console.table(grades);
  let finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 40) {
      finalGrades.push(grades[i]);
    } else if (grades[i] % 5 === 3) {
      finalGrades.push(grades[i] + 2);
    } else if (grades[i] % 5 === 4) {
      finalGrades.push(grades[i] + 1);
    } else {
      finalGrades.push(grades[i]);
    }
  }

  console.log(finalGrades);
}

gradingStudents([73, 67, 38, 33]);
