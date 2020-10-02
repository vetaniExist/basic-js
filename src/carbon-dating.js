const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //numActivity это то что нам передается в функцию на вход, но преобразованное из строки в число? Т.е. это и есть активность изотопа в образце по форммуле?

  // k = 0.693/HALF_LIFE_PERIOD;    t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
  let iSampleActivity = parseInt(sampleActivity);/// A

  if ( Number.isNaN(iSampleActivity) || iSampleActivity < 0) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let time = Math.log(MODERN_ACTIVITY/iSampleActivity) / k

  if (time > 9000 || time <= 0) {
    return false;
  }

  return time;


};
