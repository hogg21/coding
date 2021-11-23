// We create new array by using function map() and we parsed this array
const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));

const numbers = [5, 19.8, "5.63", null];

console.log(getParsedIntegers(numbers));

// We create new array by using function map() and we parsed this array
const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));
const numbers2 = [5, -5, -10, 6.11, 10];
console.log(getParsedIntegersV2(numbers2));

// We create new array by using function map() and we parsed this array
const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));

const numberParseFloat = [-5.10, 5.115, -7.25];
console.log(getParsedFloats(numberParseFloat));


// We create new array by using function map() and we parsed this array
const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));

const numberParseFloatV2 = [-5.1, 5.115, -7.25];

console.log(getParsedFloatsV2(numberParseFloatV2));
