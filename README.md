# Color Sequence Generator

Generate color sequences between two hexadecimal colors.

## Installation

To use this package in your project, you need to install it via npm:

```sh
npm install color-sequence-generator
```
## Usage


Import the functions from the package and use them as follows:

```javascript
const { hexToRGB, rgbToHex, generateColorSequence } = require('color-sequence-generator');

// Convert a hexadecimal color code to an RGB object
const hexColor = "#FF00FF"; // Magenta
const rgbValue = hexToRGB(hexColor);
console.log(rgbValue); // { r: 255, g: 0, b: 255 }

// Convert RGB components to a hexadecimal color code
const hexColor = rgbToHex(255, 0, 255); // Magenta
console.log(hexColor); // "#FF00FF"

// Generate a sequence of colors between start and end colors
const startColor = "#FF0000"; // Red
const endColor = "#0000FF"; // Blue
const amount = 5;
const colorSequence = generateColorSequence(startColor, endColor, amount);
console.log(colorSequence); // Array of interpolated colors

```
### Examples
Here are a few more usage examples to get you started:
```javascript
const { generateColorSequence, hexToRGB } = require('color-sequence-generator');

const startColor = "#FFFF00"; // Yellow
const endColor = "#00FFFF"; // Cyan
const amount = 8;
const colorSequence = generateColorSequence(startColor, endColor, amount);
console.log(colorSequence); // Array of interpolated colors

const hexColor = "#00FF00"; // Green
const rgbValue = hexToRGB(hexColor);
console.log(rgbValue); // { r: 0, g: 255, b: 0 }
```
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out to [Mahidul Islam Mukto](mailto:hello@mukto.info) for any questions or feedback.

GitHub Repository: [color-sequence-generator](https://github.com/muktoapb/color-sequence-generator)
