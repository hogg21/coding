const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;
  switch (operator) {
    case "+":
      result = Number(a) + +b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
  }
  return `${expression} = ${result}`;
};
console.log(calc("1 + 2"));
console.log(calc("12 - 12"));
console.log(calc("100 * 10"));
console.log(calc("200 / 100"));
