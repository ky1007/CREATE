export class Circle {
  constructor(cx, cy, radius, color, opacity, animation) {
    this.cx = cx;
    this.cy = cy;
    this.r = radius;
    this.color = color;
    this.opacity = opacity;
  }

  create() {
    const svg = document.getElementById('canvas');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttributeNS(null, "cx", this.cx);
    circle.setAttributeNS(null, "cy", this.cy);
    circle.setAttributeNS(null, "r", this.r);
    circle.setAttributeNS(null, "style", `fill:${this.color}; fill-opacity:${this.opacity}`);
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
  }

  create() {
    const svg = document.getElementById('canvas');
    const square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    square.setAttributeNS(null, "x", this.x);
    square.setAttributeNS(null, "y", this.y);
    square.setAttributeNS(null, "width", this.width);
    square.setAttributeNS(null, "height", this.width);
    square.setAttributeNS(null, "style", `fill:${this.color}; fill-opacity:${this.opacity}`);
    svg.appendChild(square);
  }
}

export class Triangle {
  constructor(x, y, width, color, opacity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.opacity = opacity;
  }

  create() {
    const svg = document.getElementById('canvas');
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    const p1 = `${this.x} ${this.y}`; 
    const p2 = `${this.x + this.width} ${this.y}`; 
    const p3 = `${this.x + (this.width / 2)} ${this.y + this.width}`; 
    triangle.setAttributeNS(null, "points", `${p1}, ${p2}, ${p3}`);
    triangle.setAttributeNS(null, "style", `fill:${this.color}; fill-opacity:${this.opacity}`);
    svg.appendChild(triangle);
  }
}
