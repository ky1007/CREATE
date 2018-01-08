import { Circle } from './shapes.js';
import { captureWords } from './conversion.js';
import { buttonListener } from './poems.js';

document.addEventListener('DOMContentLoaded', () => {
  captureWords();
  buttonListener();
});