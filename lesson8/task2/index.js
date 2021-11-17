const concatProps = obj => {
    // put your code here
    let arr = [];
    for (let key in obj) {
        // console.log(obj[key]);
        arr.push(obj[key]);
    }
    return arr;
  };
  
  // examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));