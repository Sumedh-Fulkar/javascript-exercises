const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, cur) => total + cur, 0);
};

const multiply = function(array) {
  return array.reduce((total, cur) => total * cur, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  }
  fact = 1;
  for (let i = 2; i <= n; i++ ) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
