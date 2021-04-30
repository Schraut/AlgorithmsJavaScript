// create a polygon class
class Polygon {
  constructor(arr) {
    this.sides = arr;
  }
  perimeter() {
    return this.sides.reduce((acc, crr) => (acc = acc + crr), 0);
  }
}
