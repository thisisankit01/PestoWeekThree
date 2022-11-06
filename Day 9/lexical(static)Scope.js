
function scope1(){
  let valOfScope1 = 1;
  return function innerScope(){
    let valOfInnerScope = 2;
    console.log(`${valOfScope1} and ${valOfInnerScope}`);
  };
}

const innerFn = scope1();
innerFn();
