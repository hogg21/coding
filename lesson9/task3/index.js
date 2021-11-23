

const product = {
  name: "Iphone 12",
  color: "white",
  price: 20000,
}

function getKeys(obj) {
  // put you code here
  Object.keys(obj).forEach((key) => {
    console.log(key);
  });
}
console.log(getKeys(product));

