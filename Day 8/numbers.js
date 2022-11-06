//max array
function max(array){
  let currentMax = -Infinity;
  for(const max of array){
    if(max > currentMax){
      currentMax = max;
    }
  };
  return currentMax;
}

//convertiing into number
const a  = number(NaN);
console.log(a);