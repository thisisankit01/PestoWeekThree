let myName = 'Ankit';

function printer(addExclamation){
  function printerName(){
    let newName = myName;
    if(addExclamation){
      newName = myName +'!';
    }
console.log(`Old name = ${myName}`);
console.log(`New name = ${newName}`);
  };
  return printerName;
}

const printNameFn = printer(false); // if true then it will print new name with exclamation mark.

printNameFn();

myName = 'another Name';

printNameFn();