const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let counterOfCats = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for(let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === "^^") {
        counterOfCats += 1;
      }
    }
  }

  return counterOfCats;
};
