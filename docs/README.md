# CREATE

## Background
Synthesia is a perceptual phenomenon where stimulation of one sensory function leads to an involuntary experience of another sensory function. 

CREATE is a virtual canvas that allows users to type words, poems, or stories and see a those words translated into visualization of shapes and colors. 

Certain letters or patterns of letters will trigger a specific shape that's either a circle, a triangle, or square. Each shape will be initialized with a specific opacity, color/gradient, size, and animation based on the letters the user inputs.

## Functionality and MVP
- [ ] Take user input and parse the input as one long string into a hash-like function
- [ ] Have the output of the hash-like function determine which shape and what properties of that shape will have
- [ ] Display the shapes on a canvas
- [ ] Allow users to export and download their creation as an SVG file

**Extra functionality (bonus):**
 - Gamify the shape creation progress: give the shapes a physical properties of how they move through space on the canvas
 - Have users try to balance stack the shapes so it reaches the top of the canvas
 - Limit of the number of words the user can use to make it to the top of the canvas

## Wireframe
The user will type into a text box and a canvas will sit below it. The shapes will appear on this canvas. 

![wireframe](./create.png)

## Technologies, plugins, and APIs
CREATE will be implemented using vanilla JavaScript and the SVG capabilities in HTML. No jQuery will be used, just vanilla DOM manipulation. 

The app will be broken down into the following scripts/source files:
* `shapes.js`
  * defines three different classes for each shape (circle, square, triangle)
  * when a new instance of each class is called a new SVG element containing the object's properties will be returned
* `conversion.js`
  * captures the user input text as one long string 
  * passes the user input into a hash-like function to generate properties the shape objects should have
  * the hash-like function should return new shape objects based on the string it receives
* `create.js`
  * entry file

## Implementation 
**Day 1:**
Set up the skeletons for the files listed above. Configure webpack config file.

Setup all necessary Node modules, including getting webpack up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 3 scripts outlined above. Learn the basics SVG and DOM manipulation in the evening. Goals for the day:

 * Get a green bundle with webpack
 * Display an SVG on the the screen

**Day 2:** 
Keep learning SVG properties and experiment rendering different shapes of different opacities, colors, and size onto a canvas.

 * Start working in the `shapes.js` to make shapes appear the new shape classes defined in that file
 * Start working in `conversion.js` and implement how to make SVG shapes appear based on simple user input 
 * Determine the rules of the hash-like function: what specific patterns of letters or ASCII characters will trigger specific properties
 * Start implementing the rules of the hash-like function into code


**Day 3:**
 * Continue working in `conversion.js` and implementing the rules that converts the string of text into shapes onto the canvas. 
 * Ensure the results are aesthetically pleasing 

**Day 4:**
 * Create the ability for users to export their creations into an SVG file they can download
 * Implement extra functionality if on schedule. Otherwise keep working on core functionality and fixing any bugs
