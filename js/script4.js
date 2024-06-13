let recarea = document.querySelector('.recarea');
let cirarea = document.querySelector('.cirarea');

class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
     rectangleArea() {
        recarea.innerHTML = (`RactangleArea : ${this.width * this.width}`);
    }
  
     circleArea(radius) {
        this.radius = radius;
        cirarea.innerHTML = (`CircleArea : ${3.14 * this.radius * this.radius}`);
    }
  }
  
let ra = new Shape(6, 10);
ra.rectangleArea();
ra.circleArea(5);