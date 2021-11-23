const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
const FiniteNumbers = [0, 36, "26", 44, 10, "fff", "25"];
console.log(getFiniteNumbers(FiniteNumbers));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
const FiniteNumbersV2 = ["0", -2, "50", 40, 10, "brown"];
console.log(getFiniteNumbersV2(FiniteNumbersV2));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
const getNanNumbers = [[1, 2, "ff", Infinity, "1b2d", NaN, 15]];
console.log(getNaN(getNanNumbers));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
const getNanV2 = [1, 2, NaN, Infinity, "fff", "1b2"]
console.log(getNaNV2(getNanV2));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));
const IntNumbers = [1, -1.1, 2.1, 10, 5, 9.421];
console.log(getIntegers(IntNumbers));