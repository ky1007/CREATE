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
  const xAvg = xSum.reduce((a, b) => a + b, 0) / properties.wordLength;

  const ySum = Object.keys(properties.y).map(key => {
    switch (key) {
      case 'middle':
        return properties.y[key] * (canvasWidth / 2);
      case 'bottom': 
        return properties.y[key] * (canvasWidth);
    }
  });
  const yAvg = ySum.reduce((a, b) => a + b, 0) / properties.wordLength;
  
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
  const sizeAvg = sizeSum.reduce((a, b) => a + b, 0) / properties.wordLength;
  
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
  const opacityAvg = opacitySum.reduce((a, b) => a + b, 0) / properties.wordLength;

  switch (shape) {
    case 'triangle':
      let newTriangle = new Triangle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newTriangle.create();
      return downloadLink();
    case 'circle':
      let newCircle = new Circle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newCircle.create();
      return downloadLink();
    case 'square':
      let newSquare = new Square(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newSquare.create();
      return downloadLink();
  }
};

const downloadLink = () => {
  let svg = document.getElementById("canvas");

  // Credit to The Who on Stack Overflow for this elegant way apporach of using Base64 to encode the SVG xmls
  // https://stackoverflow.com/questions/2483919/how-to-save-svg-canvas-to-local-filesystem
  let serializer = new XMLSerializer();
  let source = serializer.serializeToString(svg);

  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  let url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

  let link = document.getElementById("link");
  link.href = url;
  link.classList.add("visible");
};

export default shapeDetermination;
