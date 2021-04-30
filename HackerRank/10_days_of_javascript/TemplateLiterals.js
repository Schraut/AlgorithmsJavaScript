var a = 5;
var b = 10;

function foo(strings, ...values) {
  console.log(".." + strings[0] + "!");
  console.log("..." + strings[1] + "?");
  console.log("...." + strings[2] + "&");
  console.log("....." + strings[3] + "%");
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
}

foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}
String
Another`;

function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;
  const s1 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  const s2 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  return [s1, s2].sort();
}
