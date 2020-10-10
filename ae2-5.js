let factorial=(values)=>(values>1)? values*factorial(values-1):1;
let myArray=[22,4,8,12];
let multipleFactorial=myArray.map(factorial);
console.log(multipleFactorial);