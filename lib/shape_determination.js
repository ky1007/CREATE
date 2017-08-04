import { Circle } from './shapes.js';

export const shapeDetermination = properties => {
  let shape;
  Object.keys(properties.shapes).reduce((a, b) => properties.shapes[a] > properties.shapes[b] ? shape = a : shape = b);
  
  let color;
  Object.keys(properties.color).reduce((a, b) => properties.color[a] > properties.color[b] ? color = a : color = b);
  switch (color) {
    case 'blue':
      color = "#777";
    case 'yellow':
      color = "#eee";
    case 'pink':
      color = "#444";
  }

  const canvasWidth = 400;
  const canvasHeight = 400;
  
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
        return properties.size[key] * (canvasWidth / 2);
    }
  });
  const sizeAvg = sizeSum.reduce((a, b) => a + b) / properties.wordLength;
  let newShape = new Circle(xAvg, yAvg, sizeAvg, color);
  console.log(newShape);
  newShape.create();
  // return [shape, color, xAvg, yAvg, sizeAvg];
};

export default shapeDetermination;
