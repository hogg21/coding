const user = {
  name: "Sam",
};
const user2 = {
  name: "Sam",
};
  
const user3 = {
  name: "Sam",
};
  
const user4 = {
  name: "Sam",
};
  
function addPropertyV1(userData, userId) {
    // put your code here
  userData.id = userId;
  console.log(userData);
  return userData;
}
  
  // put your code here
function addPropertyV2(userData, userId) {
  Object.assign(userData, { id: userId });
  console.log(userData);
  return Object.assign(userData, { id: userId });
}
  
  // put your code here
function addPropertyV3(userData, userId) {
  const resultObj = Object.assign({}, userData);
  resultObj.id = userId;
  console.log(resultObj);
  return resultObj;
}
  
  // put your code here
function addPropertyV4(userData, userId) {
  const resultObj = { ...userData, id: userId };
  console.log(resultObj);
  return resultObj;
}
  // examples
  
addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }
  
addPropertyV2(user2, "1234567");
  
addPropertyV3(user3, "1234567");
  
addPropertyV4(user4, "1234567");
