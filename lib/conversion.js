import shapeProbabilities from './shape_probabilties.js';
import shapeDetermination from './shape_determination.js'; 

// --- CAPTURE WORDS ---
export const captureWords = () => {
  let words = document.getElementById('words');
  let timer;

  words.addEventListener("keydown", () => {
    clearTimeout(timer);
    timer = setTimeout(() => draw(words.value), 100);
  });
};


// --- RENDER WORDS ---
export const draw = words => {
  let canvas = document.getElementById("canvas");
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
  if (stringLength => 6) {
    let tempSlice;
    const sliceLength = 5;
    for (let i = 0; i < stringLength; i += sliceLength) {
      tempSlice = words.slice(i, i + sliceLength);
      shapeDetermination(shapeProbabilities(tempSlice));
    }
  }
};