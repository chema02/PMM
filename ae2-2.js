let suma =(a,b)=>a+b;
let Average=values=>values.reduce(suma,0)/values.length;
let DataArray=[8,2,10,5,4,1];
console.log(Average(DataArray));