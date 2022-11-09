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

Object.setPrototypeOf(obj1, parent);

console.log(obj1.name);

for(let key in obj1){
  console.log(key, obj1[key]);
}
// Ankit
// dob 27 Feb
// age 21
// name Ankit

// Object method (keys, values, pairs)

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

// this method prints properties of current object only, not their parent
keys.forEach((key)=> console.log(key));
values.forEach((value)=> console.log(value));
entries.forEach((pairs)=> console.log(pairs));

//3. Reflect.ownKeys( )
console.log(Reflect.ownKeys(obj));
console.log(Reflect.ownKeys(Object.prototype));

