function Filtro(x){
    return  typeof x==='string';
}
let mySet=(["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10]);
let newSet=mySet.filter(Filtro);
console.log(newSet)