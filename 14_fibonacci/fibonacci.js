const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;

  if (typeof(n) === "string") {
    n = Number(n);
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let t1 = 1;
  let t2 = 1;
  let fib = 0;
  for (let i = 0; i < n-2; i++) {
    fib = t1 + t2;
    t2 = t1;
    t1 = fib;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
