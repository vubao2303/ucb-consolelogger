class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
    this.example = "I am in the Shape";
  }

  printInfo() {
    for (const key in this) {
      console.log(`${key}: ${this[key]}`);
    }
  }
}

module.exports = Shape;
