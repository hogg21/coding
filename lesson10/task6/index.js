const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (to - from < 1) {
    return null;
  }
  const resultArr = [];
  for (let i = 0; i < length; i += 1) {
    resultArr.push(Math.round(Math.random() * (to - from) + from));
  }
  return resultArr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]

// console.log(getRandomNumbers(0)); // ==> null