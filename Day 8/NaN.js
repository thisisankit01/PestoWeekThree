let a = Number('abc');
console.log(a);
//NaN

//for undefined
let b = Number(undefined);
console.log(b);

//for number + letters
let c = Number(12 + 'acc');
console.log(c);
//NaN

//it is not equal to itself
let d = Number(undefined);
console.log(c);
console.log(c===c);
//false

//index of NaN
console.log([1,2,NaN,4].indexOf(NaN)); //finding the index of NaN.
//its -1.

console.log([1,2,NaN,4].indexOf(2)); //finding whats in index 2.
//output: NaN
