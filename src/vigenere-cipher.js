const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bIsDirect) {


  }

  encrypt(message, key) {

    if (!message || ! key) {
      throw new Error();
    }

    let calibratedMessage = message.replace(/ /g, "");
    let calibratedKey = configurateCalibratedKeyRow(calibratedMessage,key);

    
    let result = "";
    
    for( let i = 0; i < calibratedMessage.length; i += 1) {
      let codeShift = isUpperCase(calibratedMessage[i]) ? 65 : 97;
      let keyCodeShift = isUpperCase(calibratedKey[i]) ?  65 : 97;
 

      let messageShift = calibratedMessage.charCodeAt(i);
      if (messageShift < codeShift || messageShift > codeShift + 26) {
        result += calibratedMessage[i];
        continue;
      }
      messageShift -= codeShift;
      let keyShift = calibratedKey.charCodeAt(i) - keyCodeShift;
      let shiftedCharCode = (keyShift + messageShift ) % 26 + keyCodeShift;


      result += String.fromCharCode(shiftedCharCode);
    }

    let missingSpaces = message.length - calibratedMessage.length;
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] === " ") {
        result = result.slice(0,i) + " " + result.slice(i);
      }
    }
    for (let i = 0; i < missingSpaces; i += 1) {
   
    }

    return result.toUpperCase();
    
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

function configurateCalibratedKeyRow(calibratedMessage,key) {
  let calibratedKey = key;

  if(calibratedMessage.length > calibratedKey.length) {
    while (calibratedMessage.length > calibratedKey.length) {
      if (calibratedMessage.length > key.length + key.length) {
        calibratedKey += key;
      } else {
        let difference = calibratedMessage.length - key.length;
        calibratedKey += key.substring(0, difference);
      }
    }
  }
  return calibratedKey;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}


module.exports = VigenereCipheringMachine;
