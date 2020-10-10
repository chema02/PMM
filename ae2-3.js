let values=[5,7,8,7,2,1];

/*let findMinimun=(values.reduce(function(a,b){
    return Math.min(a,b);
}));*/
let findMinimum=values.reduce((a,b)=>Math.min(a,b));
console.log(findMinimum);