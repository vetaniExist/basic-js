const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let command = ["--discard-next","--discard-prev","--double-next","--double-prev"];

  for (let i = 0; i < arr.length; i  += 1) {
    switch(arr[i]) {
      case command[0]: {
        if (arr.length > i +1 && i !==0) {
          arr = arr.slice(0,i+1).concat(arr.slice(i+2));

        } else if (i === 0) {
          if (arr.length > 2 ) {
            arr = arr.slice(0,i+1).concat(arr.slice(i+2));

          }
        }
        break;
      }
      case command[1]: {
        if (i > 0) {
          arr = arr.slice(0, i-1).concat(arr.slice(i));
        }
        break;
      }
      case command[2]: {
        if (i + 1 !== arr.length) { 
          arr = arr.slice(0, i + 2 ).concat(arr.slice(i+1));
          i++;
        } 
    
        break;
      }
      case command[3]: {
        if (i !== 0) {
          arr = arr.slice(0, i ).concat(arr.slice(i-1));
          i++;
        }
        break;
      }
    }
  }
  return arr.filter(item => !command.includes(item));
};
