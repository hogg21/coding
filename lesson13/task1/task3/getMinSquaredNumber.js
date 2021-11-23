export const minSquaredNumber = arr => {
    if(!Array.isArray(arr)) {
        return null;
    }
    const asbsoluteValues = arr.map((num) => Math.abs(num * num));

    const min = Math.min(...asbsoluteValues);
  
    return min;
  };
  
  // 1 - get absolute values
  // 2 - find min squared number
console.log(minSquaredNumber([-777, 3, -2, 6, 45, -20])); // ===> 4
console.log(minSquaredNumber([]));