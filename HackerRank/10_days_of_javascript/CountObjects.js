// iterate over an object
// complete the function
// it has one parameter and it's an array of objects
// count the number of objects where x and y equal each other

function getCount(objects) {
  //console.log(objects);
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      console.log("x:" + objects[i].x + "y:" + objects[i].y);
      //count++;
    }
  }
  //console.log(count);
}

getCount([
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
]);
