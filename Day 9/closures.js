//beginning
for(var i =0; i<3 ; i++){
  setTimeout(function log(){
    console.log(i);
  },1000);
};

// Define the closure
function multFn() {
  var mult = 9;
  return function(val) {
    mult = mult * val;
    return mult;
  }
}
  
// Use the closure
var mult = multFn();
console.log(mult(18));
//162

//where closures are used

//Event Handlers

let clickCounted = 0;

myButton.addEventListener('click',function handleClick() {
 clickCounted++;
 console.log(`Button was clicked ${clickCounted} times`);
});

//CallBacks
const message = 'Hello World!';

setTimeout (function CallBacks(){
  console.log(message); //logs "Hello World"
},1000);