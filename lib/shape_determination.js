import { Circle, Square, Triangle } from './shapes.js';

export const shapeDetermination = properties => {
  let shape;
  Object.keys(properties.shapes).reduce((a, b) => properties.shapes[a] > properties.shapes[b] ? shape = a : shape = b);
  
  let color;
  Object.keys(properties.color).reduce((a, b) => properties.color[a] > properties.color[b] ? color = a : color = b);
  switch (color) {
    case 'blue':
      color = "#0ff";
      break;
    case 'yellow':
      color = "#ff0";
      break;
    case 'pink':
      color = "#f0f";
      break;
    default:
      color = "#000";
      break;
  }

  const element = document.getElementsByClassName('right')[0];
  let positionInfo = element.getBoundingClientRect();
  let canvasHeight = positionInfo.height;
  let canvasWidth = positionInfo.width;

  const xSum = Object.keys(properties.x).map(key => {
    switch (key) {
      case 'middle':
        return properties.x[key] * (canvasWidth / 2);
      case 'right': 
        return properties.x[key] * (canvasWidth);
    }
  });
  const xAvg = xSum.reduce((a, b) => a + b) / properties.wordLength;
  
  const ySum = Object.keys(properties.y).map(key => {
    switch (key) {
      case 'middle':
        return properties.y[key] * (canvasWidth / 2);
      case 'bottom': 
        return properties.y[key] * (canvasWidth);
    }
  });
  const yAvg = ySum.reduce((a, b) => a + b) / properties.wordLength;

  const sizeSum = Object.keys(properties.size).map(key => {
    switch (key) {
      case 'small':
        return properties.size[key] * (canvasWidth / 10);
      case 'medium':
        return properties.size[key] * (canvasWidth / 5);
      case 'large': 
        return properties.size[key] * (canvasWidth);
    }
  });
  const sizeAvg = sizeSum.reduce((a, b) => a + b) / properties.wordLength;
  
  const opacitySum = Object.keys(properties.opacity).map(key => {
    switch (key) {
      case 'light':
        return properties.opacity[key] * (0.25);
      case 'medium':
        return properties.opacity[key] * (0.5);
      case 'dark': 
        return properties.opacity[key] * (0.75);
    }
  });
  console.log(opacitySum, 'opacitySum');
  const opacityAvg = opacitySum.reduce((a, b) => a + b) / properties.wordLength;
  console.log(opacityAvg, 'opacityAvg');
  console.log(color);
  switch (shape) {
    case 'triangle':
      let newTriangle = new Triangle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      return newTriangle.create();
    // case 'triangle':
    //   let newFakeSquare = new Square(xAvg, yAvg, sizeAvg, color, opacityAvg);
    //   return newFakeSquare.create();
    case 'circle':
      let newCircle = new Circle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      return newCircle.create();
    case 'square':
      let newSquare = new Square(xAvg, yAvg, sizeAvg, color, opacityAvg);
      return newSquare.create();
  }
  
  // console.log(xAvg, 'size-avg');
  // let newShape = new Circle(xAvg, yAvg, sizeAvg, color);
  // console.log(newShape, 'new-shape');
  // newShape.create();
  // return [shape, color, xAvg, yAvg, sizeAvg];
};

export default shapeDetermination;
