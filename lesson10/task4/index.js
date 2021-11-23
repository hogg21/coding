const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr[0] === undefined) {
    return null;
  }
  const asbsoluteValues = arr.map((num) => Math.abs(num));

  const max = Math.max(...asbsoluteValues);

  return max;
};

// 1 - get absolute values
// 2 - find max
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([]));