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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _shapes = __webpack_require__(2);

var _conversion = __webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {
  (0, _conversion.captureWords)();
  // winningProperties();
  // winningProperties(shapeProperties('abc'));
});
// let mySVG = document.getElementById('canvas');
//   console.log(mySVG, 'mySVG');
// let newCircle = new Circle(100, 100, 50, "blue");
// newCircle.create();
// captureWords();

// document.addEventListener('DOMContentLoaded', () => {
//   let rec = document.querySelector("rect");

//   rec.addEventListener("click", () => {
//     var svg = document.getElementsByTagName('svg')[0]; //Get svg element

//     // THIS IS TO MAKE A RECTANGLE
//     var rectangle = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
//     rectangle.setAttributeNS(null, "x", "10");
//     rectangle.setAttributeNS(null, "y", "20");
//     rectangle.setAttributeNS(null, "width", "100");
//     rectangle.setAttributeNS(null, "height", "50");
//     rectangle.setAttributeNS(null, "style", "fill:red");
//     svg.appendChild(rectangle);

//     // THIS IS TO MAKE A CIRCLE
//     var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
//     circle.setAttributeNS(null, "cx", "50");
//     circle.setAttributeNS(null, "cy", "50");
//     circle.setAttributeNS(null, "r", "10");
//     circle.setAttributeNS(null, "style", "fill:orange");
//     svg.appendChild(circle);

//     // THIS IS TO MAKE A POLYGON
//     var circle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon'); //Create a path in SVG's namespace
//     circle.setAttributeNS(null, "points", "50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180");
//     circle.setAttributeNS(null, "style", "fill:orange");
//     svg.appendChild(circle);

//     // THIS IS TO MAKE A PATH
//     // var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
//     // newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
//     // newElement.style.stroke = "#000"; //Set stroke colour
//     // newElement.style.strokeWidth = "5px"; //Set stroke width
//     // svg.appendChild(newElement);
//   });
//   // rec.addEventListener("click", () => console.log('hey'));
//   // rec.addEventListener("click", () => rec.style.width=document.getElementById("width-input").value);
//   // document.getElementById('recc')
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureWords = undefined;

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
      return render(words.value);
    }, 100);
  });
};

// --- RENDER WORDS ---
var render = function render(words) {
  var canvas = document.getElementById("canvas");
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  if (words.length >= 3) {
    var shapeChars = (0, _shape_probabilties2.default)(words);
    (0, _shape_determination2.default)(shapeChars);
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function () {
  function Circle(cx, cy, radius, color, animation) {
    _classCallCheck(this, Circle);

    this.cx = cx;
    this.cy = cy;
    this.r = radius;
    this.color = color;
    this.animation = "";
  }

  _createClass(Circle, [{
    key: "create",
    value: function create() {
      var svg = document.getElementById('canvas');
      var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
      circle.setAttributeNS(null, "cx", this.cx);
      circle.setAttributeNS(null, "cy", this.cy);
      circle.setAttributeNS(null, "r", this.r);
      circle.setAttributeNS(null, "style", "fill:" + this.color);
      svg.appendChild(circle);
    }
  }]);

  return Circle;
}();

var Square = function Square(x, y, width, animation) {
  _classCallCheck(this, Square);

  this.x = 0;
  this.y = 0;
  // this.width = 5;
  this.fill = "green";
  this.animation = "";
};

var Triangle = function Triangle(x, y, width, animation) {
  _classCallCheck(this, Triangle);

  this.x = 0;
  this.y = 0;
  this.fill = "yellow";
  this.animation = "";
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

exports.default = shapeProbabilities;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeDetermination = undefined;

var _shapes = __webpack_require__(2);

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
      color = "#777";
    case 'yellow':
      color = "#eee";
    case 'pink':
      color = "#444";
  }

  var canvasWidth = 400;
  var canvasHeight = 400;

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
  }) / properties.wordLength;

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
  }) / properties.wordLength;

  var sizeSum = Object.keys(properties.size).map(function (key) {
    switch (key) {
      case 'small':
        return properties.size[key] * (canvasWidth / 10);
      case 'medium':
        return properties.size[key] * (canvasWidth / 5);
      case 'large':
        return properties.size[key] * (canvasWidth / 2);
    }
  });
  var sizeAvg = sizeSum.reduce(function (a, b) {
    return a + b;
  }) / properties.wordLength;
  var newShape = new _shapes.Circle(xAvg, yAvg, sizeAvg, color);
  console.log(newShape);
  newShape.create();
  // return [shape, color, xAvg, yAvg, sizeAvg];
};

exports.default = shapeDetermination;

/***/ })
/******/ ]);
//# sourceMappingURL=webpack.js.map