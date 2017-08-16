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
    rotation: {
      full: 0,
      middle: 0,
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

export default shapeProbabilities;