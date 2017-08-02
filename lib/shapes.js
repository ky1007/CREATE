export class Circle {
  constructor(cx, cy, radius, color, animation) {
    // this.cx = 0;
    // this.cy = 0;
    // this.r = 50;
    // this.color = "orange";
    // this.animation = "";
    this.cx = cx;
    this.cy = cy;
    this.r = radius;
    this.color = color;
    this.animation = "";
  }

  create() {
    let svg = document.getElementsByTagName('svg')[0]; 
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttributeNS(null, "cx", this.cx);
    circle.setAttributeNS(null, "cy", this.cy);
    circle.setAttributeNS(null, "r", this.r);
    circle.setAttributeNS(null, "style", `fill:${this.color}`);
    svg.appendChild(circle);
  }
}

class Square {
  constructor(x, y, width, animation) {
    this.x = 0;
    this.y = 0;
    // this.width = 5;
    this.fill = "green";
    this.animation = "";
  }
}

class Triangle {
  constructor(x, y, width, animation) {
    this.x = 0;
    this.y = 0;
    this.fill = "yellow";
    this.animation = "";
  }
}
