const add = function() {
	
  console.log(arguments.length) 
  let sum = 0;
  if (arguments.length == 0) {
    return arguments.length;
   } else {
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    } return sum;
   }
}; 
const subtract = function() {
  let sub = 0
  for (i = 0; i < arguments.length; i++) {
    sub = (arguments[i++]) - (arguments[i]);
  } return sub;
};

// array.reduce uses an accumulator (newSum) as its first argument, the 0 after the addition is setting an initial value
const sum = function(array) {
	return array.reduce((newSum, current) => newSum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};


const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  } return product; 
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
