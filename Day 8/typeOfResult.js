function countLength(obj){
  if (typeof obj === 'object' && typeof obj != null ){
    return Object.keys(obj).length;
  }
};
console.log(countLength(null));
console.log(countLength({a : 5}));