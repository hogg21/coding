// How to work on tech tasks. Step by step guide

// 1. Learn requirement
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from 2 to num => i
// 2. iterate from 2 to i => number
// 3. if i % number === 0

// 1 - 9
// 2 -> true
// 3(3/1, 3/2, 3/3) -> true
// 4(4/1, 4/2, 4/3, 4/4) -> false

// input: num
// output: undefined

function isPrime(num) {
  for (let index = 2; index < num; index += 1) {
    //   console.log("Inner number", i);
    if (num % index === 0) {
      return false;
    }
  }
  return true;
}
function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
getPrimes(15);
