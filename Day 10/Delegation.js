// in operator - in operator just looks after all grandparents of the obj so if we pass obj.toString , it will return true.

const obj = {
  firstName : 'Ankit',
  LastName : 'Pandey',
};

console.log(obj.firstName);

console.log('firstName' in obj);
console.log('LastName' in obj);
console.log('isPrototypeof' in obj);

//output
//Ankit
//Pandey
//true

//hasOwnPrperty - it does not apply on parents or grandParents 
console.log(obj.hasOwnProperty('toString'));
//false
console.log(obj.hasOwnProperty('firstName'));
//true