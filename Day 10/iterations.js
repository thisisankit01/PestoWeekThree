// we do not have any iteration like for loops for objects because to iterate in an array we need to have index first.

let arr = [1, 'b' ,3];

const obj = {
  name: 'ankit',
};

for(let key in arr){
  console.log(key, arr[key]);
};

//for in loop in objects
const parent = {
  name: 'Ankit',
}

const obj1 = {
  dob: '27 Feb',
  age: '21',
  [Symbol()] : 'Hello'
}

Object.setPrototypeOf(obj1, parent); //setting parent as parent of obj 1 suing sertPrototypeof method.

console.log(obj1.name);

for(let key in obj1){ //using for in loop for  iterating in objects(obj1).
  console.log(key, obj1[key]); //printing key and value in iteration.
}
// Ankit
// dob 27 Feb
// age 21
// name Ankit

// Object method (keys, values, pairs)

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj); //entries are entry of an entry

// foreach prints properties of current object only, not their parent.
keys.forEach((key)=> console.log(key)); // using for each to print all keys.
values.forEach((value)=> console.log(value)); // usinfg for each tom print all values.
entries.forEach((pairs)=> console.log(pairs));// used for each to print all pairs of keys and values.

//outpurt
// dob
// age
// 27 Feb
// 21
// [ 'dob', '27 Feb' ]
// [ 'age', '21' ]

entries.forEach((pairs) =>{
  const[key,val] = pairs;
  console.log(key,val);
});  

//0 { name: 'Ankit' }
//1 { surname: 'Pandey' }


//3. Reflect.ownKeys( ) - popular and powerful method
console.log(Reflect.ownKeys(obj)); //reflets all keys inlcluding symbols
console.log(Reflect.ownKeys(Object.prototype));

//output

// [ 'dob', 'age', Symbol() ]
// [ 'constructor',
//   '__defineGetter__',
//   '__defineSetter__',
//   'hasOwnProperty',
//   '__lookupGetter__',
//   '__lookupSetter__',
//   'isPrototypeOf',
//   'propertyIsEnumerable',
//   'toString',
//   'valueOf',
//   '__proto__',
//   'toLocaleString' ]
