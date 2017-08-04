import { Circle } from './shapes.js';

const captureWords = () => {
  let words = document.getElementById('words');
  let timer;
  
  let newCircle = new Circle(100, 100, 50, "blue");
  newCircle.create();

  words.addEventListener("keydown", () => {
    clearTimeout(timer);
    timer = setTimeout(() => hashing(words.value), 100);
  });

};

const hashing = words => {
  var canvas = document.getElementById("canvas");
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  // let countedString = characterCounter(words);

  if (words.length < 4) {
    let newCircle = new Circle(100, 100, 50, "blue");
    newCircle.create();
  }
  if (words.length > 6) {
    let newCircle = new Circle(50, 50, 10, "orange");
    newCircle.create();
  }
};



const shapeProperties = word => {
  const wordLength = word.length;

  let properties = {
    shapes: {
      triangle: 0,
      square: 0,
      circle: 0,
    },
    color: {
      yellow: 0,
      pink: 0,
      blue: 0,
    },
    x: {
      middle: 0,
      right: 0,
    },
    y: {
      middle: 0,
      bottom: 0,
    },
    size: {
      small: 0,
      medium: 0,
      large: 0,
    },
    opacity: {
      light: 0,
      medium: 0,
      dark: 0,
    },
    wordLength,
  };

  for (let i = 0; i < wordLength; i++) {
    let character = word.charAt(i);
    switch (character) {
      case 'a':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.medium++;
        break;
      case 'b':
        properties.shapes.circle++; 
        properties.color.pink++;
        properties.x.right++;
        properties.size.small++;
        break;
      case 'c':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.small++;
        break;
    }
  }
  return properties;
};

const winningProperties = properties => {
  let shape;
  Object.keys(properties.shapes).reduce((a, b) => properties.shapes[a] > properties.shapes[b] ? shape = a : shape = b);
  
  let color;
  Object.keys(properties.color).reduce((a, b) => properties.color[a] > properties.color[b] ? color = a : color = b);
  
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
  newShape.create();
  // return [shape, color, xAvg, yAvg, sizeAvg];
};

winningProperties(shapeProperties('abc'));
