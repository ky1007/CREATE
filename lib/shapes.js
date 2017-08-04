export class Circle {
  constructor(cx, cy, radius, color, opacity, animation) {
    this.cx = cx;
    this.cy = cy;
    this.r = radius;
    this.color = color;
    this.opacity = opacity;
    this.animation = "";
  }

  create() {
    let svg = document.getElementById('canvas');
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttributeNS(null, "cx", this.cx);
    circle.setAttributeNS(null, "cy", this.cy);
    circle.setAttributeNS(null, "r", this.r);
    circle.setAttributeNS(null, "style", `fill:${this.color}; fill-opacity:${this.opacity}`);
    // circle.setAttributeNS(null, "style", ``);
    svg.appendChild(circle);
  }
}

export class Square {
  constructor(x, y, width, color, opacity, animation) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.opacity = opacity;
    this.animation = "";
  }

  create() {
    let svg = document.getElementById('canvas');
    let square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    square.setAttributeNS(null, "x", this.x);
    square.setAttributeNS(null, "y", this.y);
    square.setAttributeNS(null, "width", this.width);
    square.setAttributeNS(null, "height", this.width);
    square.setAttributeNS(null, "style", `fill:${this.color}; fill-opacity:${this.opacity}`);
    // square.setAttributeNS(null, "style", `fill-opacity:${this.opacity}`);
    svg.appendChild(square);
  }
}

export class Triangle {
  constructor(x, y, width, color) {
    this.x = 0;
    this.y = 0;
    this.fill = "yellow";
    this.animation = "";
  }
}
