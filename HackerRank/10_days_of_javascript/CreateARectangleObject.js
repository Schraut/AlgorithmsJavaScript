// function has 2 params a and b, both are integers
// must return an object modeling a rectangle
// length = a
// width = b
// perimeter = 2 * (a + b)
// area = a * b
// property names must be spelled correctly for code to work
// constraints  1 <= a,b <= 100

function Rectangle(a, b) {
  let object = {};
  object.length = a;
  object.width = b;
  object.perimeter = 2 * (a + b);
  object.area = a * b;

  console.log(object);
  return object;
}

Rectangle(4, 5);
