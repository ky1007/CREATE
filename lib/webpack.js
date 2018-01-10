/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function () {
  function Circle(cx, cy, radius, color, opacity, animation) {
    _classCallCheck(this, Circle);

    this.cx = cx;
    this.cy = cy;
    this.r = radius;
    this.color = color;
    this.opacity = opacity;
  }

  _createClass(Circle, [{
    key: 'create',
    value: function create() {
      var svg = document.getElementById('canvas');
      var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      circle.setAttributeNS(null, "cx", this.cx);
      circle.setAttributeNS(null, "cy", this.cy);
      circle.setAttributeNS(null, "r", this.r);
      circle.setAttributeNS(null, "style", 'fill:' + this.color + '; fill-opacity:' + this.opacity);
      svg.appendChild(circle);
    }
  }]);

  return Circle;
}();

var Square = exports.Square = function () {
  function Square(x, y, width, color, opacity, animation) {
    _classCallCheck(this, Square);

    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.opacity = opacity;
  }

  _createClass(Square, [{
    key: 'create',
    value: function create() {
      var svg = document.getElementById('canvas');
      var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      square.setAttributeNS(null, "x", this.x);
      square.setAttributeNS(null, "y", this.y);
      square.setAttributeNS(null, "width", this.width);
      square.setAttributeNS(null, "height", this.width);
      square.setAttributeNS(null, "style", 'fill:' + this.color + '; fill-opacity:' + this.opacity);
      svg.appendChild(square);
    }
  }]);

  return Square;
}();

var Triangle = exports.Triangle = function () {
  function Triangle(x, y, width, color, opacity) {
    _classCallCheck(this, Triangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color;
    this.opacity = opacity;
  }

  _createClass(Triangle, [{
    key: 'create',
    value: function create() {
      var svg = document.getElementById('canvas');
      var triangle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
      var p1 = this.x + ' ' + this.y;
      var p2 = this.x + this.width + ' ' + this.y;
      var p3 = this.x + this.width / 2 + ' ' + (this.y + this.width);
      triangle.setAttributeNS(null, "points", p1 + ', ' + p2 + ', ' + p3);
      triangle.setAttributeNS(null, "style", 'fill:' + this.color + '; fill-opacity:' + this.opacity);
      svg.appendChild(triangle);
    }
  }]);

  return Triangle;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _shapes = __webpack_require__(0);

var _conversion = __webpack_require__(2);

var _poems = __webpack_require__(5);

document.addEventListener('DOMContentLoaded', function () {
  (0, _conversion.captureWords)();
  (0, _poems.buttonListener)();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = exports.captureWords = undefined;

var _shape_probabilties = __webpack_require__(3);

var _shape_probabilties2 = _interopRequireDefault(_shape_probabilties);

var _shape_determination = __webpack_require__(4);

var _shape_determination2 = _interopRequireDefault(_shape_determination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --- CAPTURE WORDS ---
var captureWords = exports.captureWords = function captureWords() {
  var words = document.getElementById('words');
  var timer = void 0;

  words.addEventListener("keydown", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      return draw(words.value);
    }, 100);
  });
};

// --- RENDER WORDS ---
var draw = exports.draw = function draw(words) {
  var canvas = document.getElementById("canvas");
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  var stringLength = words.length;
  if (stringLength <= 1) {
    return null;
  }
  if (stringLength <= 5) {
    var shapeChars = (0, _shape_probabilties2.default)(words);
    return (0, _shape_determination2.default)(shapeChars);
  }
  if (function (stringLength) {
    return 6;
  }) {
    var tempSlice = void 0;
    var sliceLength = 5;
    for (var i = 0; i < stringLength; i += sliceLength) {
      tempSlice = words.slice(i, i + sliceLength);
      (0, _shape_determination2.default)((0, _shape_probabilties2.default)(tempSlice));
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shapeProbabilities = function shapeProbabilities(word) {
  var wordLength = word.length;

  var properties = {
    shapes: {
      triangle: 0,
      square: 0,
      circle: 0
    },
    color: {
      yellow: 0,
      pink: 0,
      blue: 0
    },
    x: {
      middle: 0,
      right: 0
    },
    y: {
      middle: 0,
      bottom: 0
    },
    size: {
      small: 0,
      medium: 0,
      large: 0
    },
    opacity: {
      light: 0,
      medium: 0,
      dark: 0
    },
    rotation: {
      full: 0,
      middle: 0
    },
    wordLength: wordLength
  };

  for (var i = 0; i < wordLength; i++) {
    var character = word.charAt(i);
    switch (character) {
      case 'a':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'b':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'c':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.small++;
        properties.opacity.light++;
        break;
      case 'd':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'e':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.light++;
        break;
      case 'f':
        properties.shapes.circle++;
        properties.color.yellow++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'g':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.small++;
        properties.opacity.dark++;
        break;
      case 'h':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'i':
        properties.shapes.square++;
        properties.color.blue++;
        properties.y.middle++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'j':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.medium++;
        properties.opacity.medium++;
        break;
      case 'k':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.large++;
        properties.rotation.full++;
        properties.opacity.light++;
        break;
      case 'l':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.middle++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'm':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.large++;
        properties.opacity.light++;
        break;
      case 'n':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'o':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'p':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.size.large++;
        properties.opacity.medium++;
        properties.y.bottom++;
        break;
      case 'q':
        properties.shapes.circle++;
        properties.color.yellow++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'r':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.right++;
        properties.y.bottom++;
        properties.size.small++;
        properties.rotation.middle++;
        properties.opacity.medium++;
        break;
      case 's':
        properties.shapes.square++;
        properties.color.pink++;
        properties.size.medium++;
        properties.opacity.light++;
        properties.y.bottom++;
        break;
      case 't':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'u':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.large++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'v':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.small++;
        properties.opacity.dark++;
        break;
      case 'w':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'x':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.large++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'y':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.size.medium++;
        properties.opacity.medium++;
        break;
      case 'z':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'A':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'B':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'C':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.small++;
        properties.opacity.light++;
        break;
      case 'D':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'E':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.light++;
        break;
      case 'F':
        properties.shapes.circle++;
        properties.color.yellow++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'G':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.small++;
        properties.opacity.dark++;
        break;
      case 'H':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'I':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.y.middle++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'J':
        properties.shapes.circle++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.medium++;
        properties.opacity.medium++;
        break;
      case 'K':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.large++;
        properties.rotation.full++;
        properties.opacity.light++;
        break;
      case 'L':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.middle++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'M':
        properties.shapes.circle++;
        properties.color.blue++;
        properties.x.middle++;
        properties.size.large++;
        properties.opacity.light++;
        break;
      case 'N':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'O':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.middle++;
        properties.opacity.light++;
        break;
      case 'P':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.size.large++;
        properties.opacity.medium++;
        properties.y.bottom++;
        break;
      case 'Q':
        properties.shapes.circle++;
        properties.color.yellow++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'R':
        properties.shapes.square++;
        properties.color.pink++;
        properties.x.right++;
        properties.y.bottom++;
        properties.size.small++;
        properties.rotation.middle++;
        properties.opacity.medium++;
        break;
      case 'S':
        properties.shapes.square++;
        properties.color.pink++;
        properties.size.medium++;
        properties.opacity.light++;
        properties.y.bottom++;
        break;
      case 'T':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.x.right++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
      case 'U':
        properties.shapes.square++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.large++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'V':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.small++;
        properties.opacity.dark++;
        break;
      case 'W':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
      case 'X':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.large++;
        properties.rotation.middle++;
        properties.opacity.dark++;
        break;
      case 'Y':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.size.medium++;
        properties.opacity.medium++;
        break;
      case 'Z':
        properties.shapes.triangle++;
        properties.color.blue++;
        properties.x.right++;
        properties.size.small++;
        properties.rotation.full++;
        properties.opacity.dark++;
        break;
    }
  }
  return properties;
};

exports.default = shapeProbabilities;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeDetermination = undefined;

var _shapes = __webpack_require__(0);

var shapeDetermination = exports.shapeDetermination = function shapeDetermination(properties) {
  var shape = void 0;
  Object.keys(properties.shapes).reduce(function (a, b) {
    return properties.shapes[a] > properties.shapes[b] ? shape = a : shape = b;
  });

  var color = void 0;
  Object.keys(properties.color).reduce(function (a, b) {
    return properties.color[a] > properties.color[b] ? color = a : color = b;
  });
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

  var element = document.getElementsByClassName('right')[0];
  var positionInfo = element.getBoundingClientRect();
  var canvasHeight = positionInfo.height;
  var canvasWidth = positionInfo.width;

  var xSum = Object.keys(properties.x).map(function (key) {
    switch (key) {
      case 'middle':
        return properties.x[key] * (canvasWidth / 2);
      case 'right':
        return properties.x[key] * canvasWidth;
    }
  });
  var xAvg = xSum.reduce(function (a, b) {
    return a + b;
  }, 0) / properties.wordLength;

  var ySum = Object.keys(properties.y).map(function (key) {
    switch (key) {
      case 'middle':
        return properties.y[key] * (canvasWidth / 2);
      case 'bottom':
        return properties.y[key] * canvasWidth;
    }
  });
  var yAvg = ySum.reduce(function (a, b) {
    return a + b;
  }, 0) / properties.wordLength;

  var sizeSum = Object.keys(properties.size).map(function (key) {
    switch (key) {
      case 'small':
        return properties.size[key] * (canvasWidth / 10);
      case 'medium':
        return properties.size[key] * (canvasWidth / 5);
      case 'large':
        return properties.size[key] * canvasWidth;
    }
  });
  var sizeAvg = sizeSum.reduce(function (a, b) {
    return a + b;
  }, 0) / properties.wordLength;

  var opacitySum = Object.keys(properties.opacity).map(function (key) {
    switch (key) {
      case 'light':
        return properties.opacity[key] * 0.25;
      case 'medium':
        return properties.opacity[key] * 0.5;
      case 'dark':
        return properties.opacity[key] * 0.75;
    }
  });
  var opacityAvg = opacitySum.reduce(function (a, b) {
    return a + b;
  }, 0) / properties.wordLength;

  switch (shape) {
    case 'triangle':
      var newTriangle = new _shapes.Triangle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newTriangle.create();
      return downloadLink();
    case 'circle':
      var newCircle = new _shapes.Circle(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newCircle.create();
      return downloadLink();
    case 'square':
      var newSquare = new _shapes.Square(xAvg, yAvg, sizeAvg, color, opacityAvg);
      newSquare.create();
      return downloadLink();
  }
};

var downloadLink = function downloadLink() {
  var svg = document.getElementById("canvas");

  // Credit to The Who on Stack Overflow for this elegant way apporach of using Base64 to encode the SVG xmls
  // https://stackoverflow.com/questions/2483919/how-to-save-svg-canvas-to-local-filesystem
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);

  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  var link = document.getElementById("link");
  link.href = url;
  link.classList.add("visible");
};

exports.default = shapeDetermination;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonListener = undefined;

var _conversion = __webpack_require__(2);

var poems = {
  "Emily Dickinson": "HOW FAR IS IT TO HEAVEN?\n\nHow far is it to Heaven?\nAs far as Death this way --\nOf River or of Ridge beyond\nWas no discovery.",

  "Oscar Wilde": "IN THE FOREST \n\nOut of the mid-wood's twilight\nInto the meadow's dawn,\nIvory limbed and brown-eyed,\nFlashes my Faun!\n\nHe skips through the copses singing,\nAnd his shadow dances along,\nAnd I know not which I should follow,\nShadow or song!\n\nO Hunter, snare me his shadow!\nO Nightingale, catch me his strain!\nElse moonstruck with music and madness\nI track him in vain!",

  "Maya Angelou": "WHEN YOU COME\n\nWhen you come to me, unbidden,\nBeckoning me\nTo long-ago rooms,\nWhere memories lie.\n\n\nOffering me, as to a child, an attic,\nGatherings of days too few.\n\nBaubles of stolen kisses.\n\nTrinkets of borrowed loves.\n\nTrunks of secret words,\n\nI cry.",

  "Robert Frost": "THE DOOR IN THE DARK\n\nIn going from room to room in the dark,\nI reached out blindly to save my face,\nBut neglected, however lightly, to lace\nMy fingers and close my arms in an arc.\n\nA slim door got in past my guard,\nAnd hit me a blow in the head so hard\nI had my native simile jarred.\n\nSo people and things don't pair any more\nWith what they used to pair with before."
};

var clearPoemList = function clearPoemList() {
  console.log('clearpoem list');
};

var doNothing = function doNothing() {
  console.log('doNothing');
};

var poemList = [];
var timer = void 0;

var textTyper = function textTyper(event) {
  var textarea = document.getElementById('words');
  var hideButtons = document.getElementsByTagName('button');
  var poet = event.target.textContent;
  for (var i = 0; i < hideButtons.length; i++) {
    if (hideButtons[i].textContent !== poet) hideButtons[i].className = 'hide';
  }
  poemList.push(poet);

  var poetryTyper = new Promise(function (resolve, reject) {
    var _loop = function _loop(_i) {
      if (poemList.length > 1) {
        clearTimeout(timer);
        return "break";
      }
      timer = setTimeout(function () {
        textarea.value = poems[poemList[0]].slice(0, _i);
        (0, _conversion.draw)(textarea.value);
      }, _i * 20);
    };

    for (var _i = 0; _i < poems[poemList[0]].length; _i++) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    };
    setTimeout(function () {
      return endPoem(hideButtons);
    }, poems[poemList[0]].length * 20);
    resolve("hellow");
    return new Promise(function () {
      return console.log('hey');
    });
  });
  poetryTyper.then(function (msg) {
    return console.log(msg, 'this the message');
  }).catch(function () {
    return console.log('caught promise');
  });
};

var endPoem = function endPoem(hideButtons) {
  poemList = [];

  for (var i = 0; i < hideButtons.length; i++) {
    hideButtons[i].className = 'active';
  }
};

var buttonListener = exports.buttonListener = function buttonListener() {
  var button = document.getElementById('activate');
  button.addEventListener('click', function (event) {
    return textTyper(event);
  });
};

/***/ })
/******/ ]);
//# sourceMappingURL=webpack.js.map