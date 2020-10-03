const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultString = "";
  str = String (str);

  if (options.hasOwnProperty("addition")) {
    options.addition = String(options.addition);
  }

  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }

  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "";
  }


  if (!Number.isNaN(parseInt(options.repeatTimes))) {
    for( let i = 0; i < options.repeatTimes; i += 1) {      
      resultString += str + configuratePartOfString(options);
      if (i !== options.repeatTimes - 1) {
        resultString += options.separator;
      }
    }
  } else {
    return str + configuratePartOfString(options);
  }

  return resultString;
};
  

function configuratePartOfString(options) {
  if(!Number.isNaN(parseInt(options.additionRepeatTimes))) {
    let willReturn = "";
    
    for( let i = 0; i < options.additionRepeatTimes; i += 1) {
      willReturn += options.addition;
      if (i !== options.additionRepeatTimes - 1) {
        willReturn += options.additionSeparator;
      }
    }
    return willReturn;
  }
  else {
    if ( options.hasOwnProperty("addition")) {
      return options.addition;  
    }

    return "";
  }
}