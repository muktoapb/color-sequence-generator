const { hexToRGB } = require('./hexToRGB');
const { rgbToHex } = require('./rgbToHex');

function generateColorSequence(startColor, endColor, amount) {
  // Convert hex color codes to RGB values
  const startRGB = hexToRGB(startColor);
  const endRGB = hexToRGB(endColor);

  // Calculate the step size for each color channel
  const stepR = (endRGB.r - startRGB.r) / (amount - 1);
  const stepG = (endRGB.g - startRGB.g) / (amount - 1);
  const stepB = (endRGB.b - startRGB.b) / (amount - 1);

  const colorSequence = [];

  for (let i = 0; i < amount; i++) {
    const currentR = Math.round(startRGB.r + stepR * i);
    const currentG = Math.round(startRGB.g + stepG * i);
    const currentB = Math.round(startRGB.b + stepB * i);

    const hexColor = rgbToHex(currentR, currentG, currentB);
    colorSequence.push(hexColor);
  }

  return colorSequence;
}

module.exports = {
  generateColorSequence,
  hexToRGB,
  rgbToHex
};
