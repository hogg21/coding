"use strict";

export const withdraw = (clients, balances, names, amount) => {
  let result = 0;
  clients.forEach(function (client, index) {
    if (client.includes(names) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (client.includes(names) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};
export const reverseArray = arr => {
    const copyArr = arr.slice();
    if(!Array.isArray(arr)) {
        return null;
    }
    return copyArr.reverse();
}
export const getAdults = obj => {
    // put your code here
    let Resobj = {};
    for(let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const elem = obj[key];
            if(elem >= 18) {
                Resobj[key] = elem;
            }
        }
    }
    console.log(Resobj);
    return Resobj;
  };