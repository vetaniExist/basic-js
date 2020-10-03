const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(bIsDirect) {
    this.bIsDirect =bIsDirect
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
 

      let messageShift = calibratedMessage.charCodeAt(i);// m
      if (messageShift < codeShift || messageShift > codeShift + 26) {
        result += calibratedMessage[i];
        continue;
      }
      messageShift -= codeShift;
      let keyShift = calibratedKey.charCodeAt(i) - keyCodeShift; // k
      let shiftedCharCode = (keyShift + messageShift ) % 26 + keyCodeShift;


      result += String.fromCharCode(shiftedCharCode);
    }

    let missingSpaces = message.length - calibratedMessage.length;
    for (let i = 0; i < message.length; i += 1) {
      if (message[i] === " ") {
        result = result.slice(0,i) + " " + result.slice(i);
      }
    }
    if (this.bIsDirect === false) {
      return result.split('').reverse().join('').toUpperCase();
    }
    return result.toUpperCase();
  }

  decrypt(message, key) {
    if (!message || ! key) {
      throw new Error();
    }

    let cryptedMessage = message.replace(/ /g, "");
    let calibratedKey = configurateCalibratedKeyRow(cryptedMessage,key);

    let result = "";

    for( let i = 0; i < cryptedMessage.length; i += 1) {
      let messageShift = cryptedMessage.charCodeAt(i);// c
      if (messageShift < 65 || messageShift > 65 + 26) {
        result += cryptedMessage[i];
        continue;
      }
      messageShift -= 65;
      let keyCodeShift = isUpperCase(calibratedKey[i]) ?  65 : 97;
      let keyShift = calibratedKey.charCodeAt(i) - keyCodeShift; // k
      let shiftedCharCode = (messageShift + 26 - keyShift ) % 26 + 65;

      result += String.fromCharCode(shiftedCharCode);
    }

    for (let i = 0; i < message.length; i += 1) {
      if (message[i] === " ") {
        result = result.slice(0,i) + " " + result.slice(i);
      }
    }
    if (this.bIsDirect === false) {
      return result.split('').reverse().join('');
    }
    return result;
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
