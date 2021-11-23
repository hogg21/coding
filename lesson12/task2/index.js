const reverseString = (str) => {
  if (typeof str !== "string") {
    return null;
  }
  let result = "";
  str
    .split("")
    .reverse()
    .forEach((el) => {
      result = result.concat(el);
    });
  return result;
}
console.log(reverseString("abcde"));
