//we created this object using literal notation
let obj = {}; //braces refers to object
obj[obj] = 10; 
console.log(obj); //actually it converts the obj to string by default internally.

console.log(obj.toString());// to proove it we will convert it to string manually and our result will be same


//output
// {'[object Object]' : 10}

//objecr constructor
const obj1 = new Object();
obj1.name = 'Ankit'

//object.create (using inheritence)
const newObj = Object.create(Object.prototype);
newObj.name = 'Ankit';

//undefined
const obj2 = {
  fName: 'Ankit',
  lName: 'Pandey',
  printFullName(){
      return this.fName + ' ' + this.lName;
  },
  func : function(){
      return 'hi';

  }
}

//accessing properties of an object
console.log(obj1.fName); // dot notation
console.log(obj1['lName']); // bracket notation
console.log(obj1.noName);//output will be undefined cause there is noobjct named noName here.


//crud in objects

//updating and reading 
var ankit = {

  name: 'Ankit',

  'desc.func' : function() {
    return 'Person Named' + this.name;
  },
};

ankit.name = 'ANKIT';
ankit['desc.func'] = 20;

console.log(ankit.name);
console.log(ankit['desc.func']);

//deleting properties
 console.log(delete ankit.name);
 console.log(ankit.name);