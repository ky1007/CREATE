# CREATE
Synesthesia is a perceptual phenomenon where stimulation of one sensory function leads to an involuntary experience of another sensory function. 

CREATE is a virtual canvas that allows users to type words, poems, or stories and see a those words translated into visualization of shapes and colors. 

Certain letters or patterns of letters will trigger a specific shape that's either a circle, a triangle, or square. Each shape will be initialized with a specific opacity, color/gradient, size, and animation based on the letters the user inputs.

Try it out: [live link](https://ky1007.github.io/CREATE/)

![Live Screnshot](docs/live-screenshot.gif)

## Implementations 

### Stretching the SVG canvas to fill its container
Instead of having a fixed width and height for the SVG canvas, the canvas width is determined by the size of its parent container. The parent container `<section class="right">` is a flex child that fills the entire right side of the browser.

Getting the size of the parent container required using a DOM function called `getBoundingClientRect()` that returns an object containing information about the selected element's height and width.
```javascript
const element = document.getElementsByClassName('right')[0];
let positionInfo = element.getBoundingClientRect();
let canvasHeight = positionInfo.height;
let canvasWidth = positionInfo.width;
```

All new SVG shape objects created would have their position and size parameters based off the values in canvasHeight and canvasWidth: 
```javascript
const sizeSum = Object.keys(properties.size).map(key => {
    switch (key) {
      case 'small':
        return properties.size[key] * (canvasWidth / 10);
      case 'medium':
        return properties.size[key] * (canvasWidth / 5);
      case 'large': 
        return properties.size[key] * (canvasWidth);
    }
  });
```

### Determining which shape and what shape properties to generate
Each text character "votes" for a specific characteristic of the shape.
```javascript
switch (character) {
      case 'a':
        properties.shapes.triangle++;
        properties.color.yellow++;
        properties.y.bottom++;
        properties.size.medium++;
        properties.rotation.full++;
        properties.opacity.medium++;
        break;
```
Here the letter 'a' modifies a properties object that tallies votes from a group of characters. The property with the highest number of votes wins. 

Some properties like x/y coordinates and size are mapped to calculated numerical values based on the canvas height and width. These numerical values contribute to a weighted average to determine the final property. 

## Future plans
### Changing how the canvas re-renders
Each keypress re-renders the entire SVG canvas. A future implementation could map sections of strings to shapes and determine which specific SVG elements need to be changed based on the specific changes made in the string.

### Aesthetic changes
Adding animations and rotations would make the canvas more dynamic. 