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


document.addEventListener('DOMContentLoaded', function () {
  var rec = document.querySelector("rect");

  rec.addEventListener("click", function () {
    var svg = document.getElementsByTagName('svg')[0]; //Get svg element

    // THIS IS TO MAKE A RECTANGLE
    var rectangle = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
    rectangle.setAttributeNS(null, "x", "10");
    rectangle.setAttributeNS(null, "y", "20");
    rectangle.setAttributeNS(null, "width", "100");
    rectangle.setAttributeNS(null, "height", "50");
    rectangle.setAttributeNS(null, "style", "fill:red");
    svg.appendChild(rectangle);

    // THIS IS TO MAKE A CIRCLE
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
    circle.setAttributeNS(null, "cx", "50");
    circle.setAttributeNS(null, "cy", "50");
    circle.setAttributeNS(null, "r", "10");
    circle.setAttributeNS(null, "style", "fill:orange");
    svg.appendChild(circle);

    // THIS IS TO MAKE A POLYGON
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'polygon'); //Create a path in SVG's namespace
    circle.setAttributeNS(null, "points", "50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180");
    circle.setAttributeNS(null, "style", "fill:orange");
    svg.appendChild(circle);

    // THIS IS TO MAKE A PATH
    // var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace
    // newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
    // newElement.style.stroke = "#000"; //Set stroke colour
    // newElement.style.strokeWidth = "5px"; //Set stroke width
    // svg.appendChild(newElement);
  });
  // rec.addEventListener("click", () => console.log('hey'));
  // rec.addEventListener("click", () => rec.style.width=document.getElementById("width-input").value);
  // document.getElementById('recc')
});

/***/ })
/******/ ]);
//# sourceMappingURL=webpack.js.map