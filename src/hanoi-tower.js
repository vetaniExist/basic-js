const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {


  let obj = {};
  
  let turns = "turns";
  let seconds = "seconds";
  let turnsSpeedPerSecond = turnsSpeed/60/60;

  obj[turns] = Math.pow(2,disksNumber) -1;
  obj[seconds] = Math.floor(obj[turns] / turnsSpeedPerSecond);

  return obj;

};
