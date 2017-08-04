const shapeProbabilities = word => {
  const wordLength = word.length;

  let properties = {
    shapes: {
      triangle: 0,
      square: 0,
      circle: 0,
    },
    color: {
      yellow: 0,
      pink: 0,
      blue: 0,
    },
    x: {
      middle: 0,
      right: 0,
    },
    y: {
      middle: 0,
      bottom: 0,
    },
    size: {
      small: 0,
      medium: 0,
      large: 0,
    },
    opacity: {
      light: 0,
      medium: 0,
      dark: 0,
    },
    wordLength,
  };

  for (let i = 0; i < wordLength; i++) {
    let character = word.charAt(i);
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

export default shapeProbabilities;