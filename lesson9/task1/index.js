// Object.keys();
// Object.values();
// Object.entries();

const user = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18
}
const getAdults = userObj => Object.entries(userObj).filter(user => user[1] >= 18).map(user => user[0]);
console.log(getAdults(user));