const getAdults = obj => {
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
  
  // examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }