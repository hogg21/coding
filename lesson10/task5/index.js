const getTotalPrice = (arr) => {
  let result = 0;
  arr.forEach((el) => {
    console.log(Math.floor(el * 100));
    result += Math.floor(el * 100);
  });
  return `$${result / 100}`;
};

const numbers = [1, 1.245, 9.085];

console.log(getTotalPrice(numbers));