const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let annagramma = [];
  for(member of members) {
    if (typeof member === "string") {
      member = member.replace(/ /g, "");
      annagramma.push(member[0].toUpperCase());
    }
  }


  return annagramma.sort().join('');
};
