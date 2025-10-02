const reverseString = function(str) {
  // newStr = ""
  // for (let i = 0; i < str.length; i++) {
  //   newStr += str[str.length -i - 1];
  // } 
  // return newStr;

  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
