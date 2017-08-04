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

  const stringLength = words.length;
  if (stringLength <= 1) {
    return null;
  }
  if (stringLength <= 5) {
    let shapeChars = shapeProbabilities(words);
    return shapeDetermination(shapeChars);
  }
  if (stringLength <= 11) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    return shapeDetermination(shapeProbabilities(words.slice(5)));
  }
  if (stringLength <= 16) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    shapeDetermination(shapeProbabilities(words.slice(5, 11)));
    return shapeDetermination(shapeProbabilities(words.slice(11)));
  }
  if (stringLength <= 23) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    shapeDetermination(shapeProbabilities(words.slice(5, 11)));
    shapeDetermination(shapeProbabilities(words.slice(11, 16)));
    return shapeDetermination(shapeProbabilities(words.slice(16)));
  }
  if (stringLength <= 29) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    shapeDetermination(shapeProbabilities(words.slice(5, 11)));
    shapeDetermination(shapeProbabilities(words.slice(11, 18)));
    shapeDetermination(shapeProbabilities(words.slice(18, 23)));
    return shapeDetermination(shapeProbabilities(words.slice(23)));
  }
  if (stringLength <= 35) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    shapeDetermination(shapeProbabilities(words.slice(5, 11)));
    shapeDetermination(shapeProbabilities(words.slice(11, 18)));
    shapeDetermination(shapeProbabilities(words.slice(18, 23)));
    shapeDetermination(shapeProbabilities(words.slice(23, 29)));
    return shapeDetermination(shapeProbabilities(words.slice(29)));
  }
  if (stringLength <= 42) {
    shapeDetermination(shapeProbabilities(words.slice(0, 5)));
    shapeDetermination(shapeProbabilities(words.slice(5, 11)));
    shapeDetermination(shapeProbabilities(words.slice(11, 18)));
    shapeDetermination(shapeProbabilities(words.slice(18, 23)));
    shapeDetermination(shapeProbabilities(words.slice(23, 29)));
    shapeDetermination(shapeProbabilities(words.slice(29, 35)));
    return shapeDetermination(shapeProbabilities(words.slice(35)));
  }
};