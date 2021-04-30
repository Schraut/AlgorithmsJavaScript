// add an area method to rectangle's prototype
// create a square class
// it'll be a subclass of rectangle
// it contains a constructor and no other methods
// it can use the rectangle class' area method to print the area of a square object

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}
