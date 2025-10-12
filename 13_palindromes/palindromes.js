const palindromes = function (str) {
  strArr = str
          .toLowerCase()
          .split("")
          .filter((ch) => (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'));
          
  revStr = strArr.slice().reverse();

  return revStr.join("") === strArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
