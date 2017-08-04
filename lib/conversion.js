import shapeProbabilities from './shape_probabilties.js';
import shapeDetermination from './shape_determination.js';

// --- CAPTURE WORDS ---
export const captureWords = () => {
  let words = document.getElementById('words');
  let timer;

  words.addEventListener("keydown", () => {
    clearTimeout(timer);
    timer = setTimeout(() => render(words.value), 100);
  });

};


// --- RENDER WORDS ---
const render = words => {
  var canvas = document.getElementById("canvas");
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  if (words.length >= 3) {
    let shapeChars = shapeProbabilities(words);
    shapeDetermination(shapeChars);
  }
};
