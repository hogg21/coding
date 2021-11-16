function getSqaured(num) {
    return num * num;
}
console.log(getSqaured(5));
console.log(getSqaured(10));
console.log(getSqaured(2));

// function printMessage(num) {
//     console.log(`I am ${num} years old`);
// }
const printMessage = function(num) {
    console.log(`I am ${num} years old`);
}
// const res = printMessage(24);
// console.log(res);

const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(9999, 100));

const getMagicNumber = () => 17;
console.log(getMagicNumber());