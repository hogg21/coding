const splitText = (text, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  if (typeof text !== "string") {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += chunk.length;
  }
  return strArr.join("\n");
};

// 1 'absadwq', 4 => ['absa', 'dwq']

console.log(splitText("absadwq"));
console.log(splitText("sssssssdfdsf", 4));
console.log(splitText(70, 4));
