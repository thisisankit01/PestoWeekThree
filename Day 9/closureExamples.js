//example 1
let count = 0;

setTimeout(function(){
  count++;
  console.log(`In setTimeout - ${count}`);// 1
},1000);

console.log(`${count}`);//0

//example 2
//let was introduced in es6 .
for(let i =0; i<3 ; i++){
  setTimeout(function(){
    console.log(i);
  },100);
}

//example 3
function a(){
  var x = 5; //now the ouput will be 5 but if x is not in this scope then it will access x=10 from global scope and output will be changed.
  let fn;
  {
    fn = function(){
      console.log(x);
    };
  }
  return fn;
}
var x = 10;
const b = a();
b();

//example 4

var a = 100;

 function abc(x) {
  var a = 10;
  return function (y) {
    return a+y;
  };
 }

 a = 50;

 var inner = abc(20);

 function foo(){
  var a = 30;
  console.log(inner(5));
 }

 foo();
 // output 15.


 //question 5
 (function immediateA(a){
  return (function immediateB(b){
    console.log(a); // what is logged
  })(1);
 })(0);
 // a will be logged with value 0

 //question 6
 function createIncrement(){
  let count = 0;
  function increment(){
    count++;
  }

  let message = `Count is ${count}`; //message is called one time only so its count is first time 0 only.
  function log(){
    console.log(message);
  }

  return [increment,log];
 }

 const [increment, log] = createIncrement();
 increment();
 increment();
 increment();
 log(); // what is logged
 //output : 0;

 //question 7 
 function createUser(initialName){
  let name = initialName;
  return{
    getName(){
      return name;
    },
    setName(newName){
      name = newName;
    },
  };
 }

 let p1 = createUser('Ankit');
 let p2 = createUser('Shivam');

 p2.setName(null);

 console.log(p1.getName());
 //returns 'Ankit'.