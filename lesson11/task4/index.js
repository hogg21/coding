function countOccurrences(text = "", str) {
  if (str === "") {
    return null;
  }
  let counter = 0;
  let underLine = text;
  while (true) {
    if (text.indexOf(str) === -1) {
      break;
    }
  
    const index = underLine.indexOf(str);
  
    underLine = underLine.slice(index + 1);
  
    counter += 1;
  
    if (underLine.indexOf(str) < 0) {
      break;
    }
  }
  return counter;
}
  
console.log(countOccurrences("fesefesfefefddss", "f"));
