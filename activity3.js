const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(add(2, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(2, 2));
console.log(doMaths(2));
console.log(doMaths(2, 2));
