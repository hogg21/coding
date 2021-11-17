
// const prop = 'my';

// const obj = {
//     name: 'Tom',
//     age: 18,
//     interest: 'football',
//     'my name': 'Denis',
//     [prop + 'name']: 'value'
// };

// // console.log(obj.age);
// // obj.age = 33;
// // console.log(obj.age);
// console.log(obj['my name']);
// console.log(obj[prop + 'name']);

// const transformToObject = arr => {
//     let obj = {};

//     arr.forEach(el => {
//         obj[el] = el;
//     })
//     return obj;
// }
// const arr = [];
// const result = transformToObject(arr);
// console.log(result);
// const transformToObject = arr => {
//     // put your code here
//     let obj = {};
  
//       arr.forEach(el => {
//           obj[el] = el;
//       })
//       return obj;
//   };
  
//   // examples
//   console.log(transformToObject(['a', 17.1, 'John Doe']));


// const user = {
//     name: 'Tom'
// };
// user.name = 'Ivan';
// console.log(user.name);

// user = {};

// const a = {};
// const b = a;
// console.log(a === b);
const name = 'Tom';

const user = {
    name,
    
};