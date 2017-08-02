import captureWords from './conversion.js';

document.addEventListener('DOMContentLoaded', () => {
  captureWords();
});

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

