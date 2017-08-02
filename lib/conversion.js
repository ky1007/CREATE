import { Circle } from './shapes.js';

const captureWords = () => {
  let words = document.getElementById('words');
  let timer;

  words.addEventListener("keydown", () => {
    clearTimeout(timer);
    timer = setTimeout(() => hashing(words.value), 100);
  })
  // words.addEventListener
  ;
  // words.addEventListener("keydown", () => console.log(words.value));
};

const hashing = (words) => {
  var canvas = document.getElementById("canvas");
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  if (words.length > 3) {
    let newCircle = new Circle(100, 100, 50, "blue");
    newCircle.create();
  }
  if (words.length > 6) {
    let newCircle = new Circle(50, 50, 10, "orange");
    newCircle.create();
  }
};

export default captureWords;