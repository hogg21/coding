const user = {
    name: 'Denis',
    age: 18,
    interest: 'IT'
}


function getKeys(obj) {
    // put you code here
    for(const key in obj) {
        if(Object.hasOwnProperty.call(obj, key)) {
            console.log(key);
        }
    }
}
console.log(getKeys(user));