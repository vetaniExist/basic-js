const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (isNaN(date.getTime())) {
    throw new Error();
  }
  

  let seasons = ["winter","winter","spring","spring","spring","summer","summer","summer","autumn","autumn","autumn","winter"];

  let month = date.getMonth();

  return seasons[month];
};
