function Filtro(x){
    return typeof x==='number' && x%2===0;
}
let mySet=(["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10]);
let newSet=mySet.filter(Filtro);
console.log(newSet)