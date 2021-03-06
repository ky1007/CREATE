import { draw } from './conversion.js';

const poems = {
  "Emily Dickinson": 
    "HOW FAR IS IT TO HEAVEN?\n\nHow far is it to Heaven?\nAs far as Death this way --\nOf River or of Ridge beyond\nWas no discovery.", 

  "Oscar Wilde": 
    "IN THE FOREST \n\nOut of the mid-wood's twilight\nInto the meadow's dawn,\nIvory limbed and brown-eyed,\nFlashes my Faun!\n\nHe skips through the copses singing,\nAnd his shadow dances along,\nAnd I know not which I should follow,\nShadow or song!\n\nO Hunter, snare me his shadow!\nO Nightingale, catch me his strain!\nElse moonstruck with music and madness\nI track him in vain!", 

  "Maya Angelou": 
    "WHEN YOU COME\n\nWhen you come to me, unbidden,\nBeckoning me\nTo long-ago rooms,\nWhere memories lie.\n\n\nOffering me, as to a child, an attic,\nGatherings of days too few.\n\nBaubles of stolen kisses.\n\nTrinkets of borrowed loves.\n\nTrunks of secret words,\n\nI cry.",

  "Robert Frost": 
    "THE DOOR IN THE DARK\n\nIn going from room to room in the dark,\nI reached out blindly to save my face,\nBut neglected, however lightly, to lace\nMy fingers and close my arms in an arc.\n\nA slim door got in past my guard,\nAnd hit me a blow in the head so hard\nI had my native simile jarred.\n\nSo people and things don't pair any more\nWith what they used to pair with before.", 
  
  "Yours Truly, Kev": 
    "ATTRACTION\n\nHe's ignoring me\nOh god.\n\nNow I'm in love "
  };

let poemList = [];
let timer;

const textTyper = (event) => {
  const textarea = document.getElementById('words');
  const hideButtons = document.getElementsByTagName('button');
  const poet = event.target.textContent;
  const drawTime = 80;
  
  let poetryTyper = () => {
    for (let i = 0; i < poems[poemList[0]].length; i++) {
      if (poemList.length > 1) {
        clearTimeout(timer);
        break;
      }
    timer = setTimeout(() => {
      textarea.value = poems[poemList[0]].slice(0, i);
      draw(textarea.value);
      }, i * drawTime);
    };
    setTimeout(() => endPoem(hideButtons), poems[poemList[0]].length * drawTime);
  };
  
  if (poet === "You (write your own poem)") {
    const instructions = "type out your own poem here";
    for (let i = 0; i <= instructions.length; i++) {
      setTimeout(() => {
        textarea.value = instructions.slice(0, i);
        draw(textarea.value);
      }, i * 100);
    }
    textarea.value = '';
  } else {
    poemList.push(poet);
    for (let i = 0; i < hideButtons.length; i++) {
      if (hideButtons[i].textContent !== poet) hideButtons[i].className = 'hide';
    }
    poetryTyper();
  }
};

const endPoem = (hideButtons) => {
  poemList = [];
  
  for (let i = 0; i < hideButtons.length; i++) {
    hideButtons[i].className = 'active';
  }
};

export const buttonListener = () => {
  const button = document.getElementById('activate');
  button.addEventListener('click', (event) => (event.target.name === undefined) ? null : textTyper(event));
};
