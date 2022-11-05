function countLength(obj){
  if(obj === null){ 
    throw new Error('Expected a object'); 
  };
  return obj.keys(obj).length; //returns key value of length of the object
};
console.log(countLength(null)); //returns null 
