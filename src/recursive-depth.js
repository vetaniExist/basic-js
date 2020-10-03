const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let i = 0; i < arr.length; i += 1) {
      let currentDepth = 1;
      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    return maxDepth;
  }
};