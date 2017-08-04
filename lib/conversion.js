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
  const element = document.getElementsByClassName('right')[0];
  const positionInfo = element.getBoundingClientRect();
  const height = positionInfo.height;
  const width = positionInfo.width;

  let canvas = document.getElementById("canvas");
  // canvas.width = width;
  // canvas.height = height;

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
  if (stringLength => 12) {
    let tempSlice;
    const sliceLength = 5;
    for (let i = 0; i < stringLength; i += sliceLength) {
      tempSlice = words.slice(i, i + sliceLength);
      shapeDetermination(shapeProbabilities(tempSlice));
    }
  }
};